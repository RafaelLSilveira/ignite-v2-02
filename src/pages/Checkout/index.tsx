import { zodResolver } from "@hookform/resolvers/zod";
import { FormatMoney } from "format-money-js";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, WarningOctagon } from "phosphor-react";
import { ReactElement, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { CoffeeSelectedCard } from "../../Components/CoffeeSelectedCard";
import { CartContext } from "../../context/CartContext";
import { AddressInfo, CheckoutContainer, ConfirmButton, ErrorMessage, InfoContainer, PurchaseTypes, ResumeItem, ResumePurchase, SelectedContainer, Title } from "./styles";

export function Checkout():ReactElement {
  const validationSchema = z.object({
    zipCode: z.string().min(8, { message: "campo CEP é obrigatório" }).max(8, "CEP incorreto, deve ter 8 digitos"),
    street: z.string().min(1, { message: "campo Rua é obrigatório" }),
    streetNumber: z.string().min(1, { message: "campo Número é obrigatório" }),
    extraInfo:  z.string(),
    neighborhood:  z.string().min(1, { message: "campo Bairro é obrigatório" }),
    city:  z.string().min(1, { message: "campo Cidade é obrigatório" }),
    stateAbbreviation:  z.string().min(2, { message: "campo Estado é obrigatório" }).max(2, "campo Estado deve conter 2 digitos"),
  });
  type ValidationSchema = z.infer<typeof validationSchema>;
  
  const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({ resolver: zodResolver(validationSchema)});
  const { cartItems, insertPurchasedData } = useContext(CartContext);
  const [clickedButton, setClickedButton] = useState(1)
  const navigate = useNavigate();
  const totalAmount = cartItems.reduce((acc, item) => {
    return (item.price * item.quantity) + acc
  }, 0)

  const fm = new FormatMoney({
    decimals: 2,
    separator: ".",
    decimalPoint: ","
  });

  const paymentMethod = ["OUTROS", "CREDIT", "DEBIT", "CASH"];

  const onSubmit = (data: ValidationSchema) => {
    insertPurchasedData({
      ...data,
      paymentMethod: paymentMethod[clickedButton],
      totalAmount: totalAmount,
    })

    navigate("/Success");
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Title>Complete seu pedido</Title>

        <InfoContainer>
          <p><MapPinLine style={{ color: "#C47F17" }} /> Endereço de entrega</p>
          <p className="subTitle">Informe o endereço onde deseja receber seu pedido</p>
          <input {...register("zipCode", { required: true })} maxLength={8} type="number" name="zipCode" id="zip-code" placeholder="CEP" style={{ width: 200 }}/>
          {errors.zipCode && (<ErrorMessage>{errors.zipCode?.message}</ErrorMessage>)}
          <input {...register("street", { required: true })}  type="text" name="street" id="street" placeholder="Rua" style={{ width: "100%"}} />
          {errors.street && (<ErrorMessage>{errors.street?.message}</ErrorMessage>)}
          <AddressInfo>
            <>
            <input {...register("streetNumber", { required: true })} type="number" name="streetNumber" id="street-number" placeholder="Número" style={{width: 200}} />
            {errors.streetNumber && (<ErrorMessage>{errors.streetNumber?.message}</ErrorMessage>)}
            </>
            <input {...register("extraInfo")} className="extraInfo" type="text" name="extraInfo" id="extra-info" placeholder="Complemento" style={{width: 348}}  />
          </AddressInfo>
          <AddressInfo>
            <input {...register("neighborhood", { required: true })} type="text" name="neighborhood" id="neighborhood" placeholder="Bairro"  style={{width: 200}} />
            {errors.neighborhood && (<ErrorMessage>{errors.neighborhood?.message}</ErrorMessage>)}
            <input {...register("city", { required: true })} type="text" name="city" id="city" placeholder="Cidade"  style={{width: 276}} />
            {errors.city && (<ErrorMessage>{errors.city?.message}</ErrorMessage>)}
            <input {...register("stateAbbreviation", { required: true })} maxLength={2} type="text" name="stateAbbreviation" id="state-abbreviation" placeholder="UF" style={{width: 60}} />
            {errors.stateAbbreviation && (<ErrorMessage>{errors.stateAbbreviation?.message}</ErrorMessage>)}
          </AddressInfo>
        </InfoContainer>

        <InfoContainer>
          <p><CurrencyDollar style={{ color:"#8047F8" }} /> Pagamento</p>
          <p className="subTitle">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

          <PurchaseTypes>
            <button 
              id="1" 
              className={clickedButton !== 1 ? "inactive" : ""}
              disabled={clickedButton === 1}
              type="button"
              onClick={() => setClickedButton(1)}
            >
              <CreditCard style={{ color:"#8047F8" }} /> 
              Cartão de crédito
            </button>
            <button
              id="2"
              className={clickedButton !== 2 ? "inactive" : ""}
              disabled={clickedButton ===2}
              type="button"
              onClick={() => setClickedButton(2)}
            >
              <Bank style={{ color:"#8047F8"}}/>
              Cartão de débito
            </button>
            <button
              id="3" 
              className={clickedButton !== 3 ? "inactive" : ""}
              disabled={clickedButton === 3}
              type="button"
              onClick={() => setClickedButton(3)}
            >
              <Money style={{ color:"#8047F8" }} /> 
              Dinheiro
            </button>
          </PurchaseTypes>
        </InfoContainer>
      </div>
      <div style={{ width:'100%', height:'100%' }}>
        <Title>Cafés selecionados</Title>
        <SelectedContainer>
          {cartItems.length > 0  ? (
            <>
              {cartItems.map((coffe) => (
                <CoffeeSelectedCard {...coffe} />
              ))}
              <ResumePurchase>
                <ResumeItem>
                  <p>Total Itens</p>
                  <p>R$ {fm.from(totalAmount, true)?.toString() ?? "R$ 0.00"}</p>
                </ResumeItem>
                <ResumeItem>
                  <p>Entrega</p>
                  <p>R$ 30.00</p>
                </ResumeItem>
                <ResumeItem>
                  <p style={{ fontWeight: 700, color: '#403937', fontSize: 20 }}>Total</p>
                  <p style={{ fontWeight: 700, color: '#403937', fontSize: 20 }}>R$ {fm.from(totalAmount + 30, true)?.toString()}</p>
                </ResumeItem>
              </ResumePurchase>
              <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
            </>
          )
          : (
            <p>Não há nada no carrinho no momento <WarningOctagon/></p>
          )}
        </SelectedContainer>
      </div>
    </CheckoutContainer>
  )
};