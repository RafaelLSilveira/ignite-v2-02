import { FormatMoney } from "format-money-js";
import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext, ICoffeeCart } from "../../context/CartContext";
import { ActionContainer, CoffeCardContainer, Divider, Image, PlusMinusContainer, Title } from "./styles";

export enum CoffeTypes {
  traditional = "Tradicional",
  withMilk = "Com leite",
  ice = "Gelado",
  special = "Especial",
  alcohol = "Alcoólico"
}  

export function CoffeeSelectedCard(props: ICoffeeCart) {
  const {
    title,
    price,
    img,
    quantity,
  } = props;

  const { updateQuantity } = useContext(CartContext);

  const fm = new FormatMoney({
    decimals: 2,
    separator: ".",
    decimalPoint: ","
  });

  const priceTreated = fm.from(price, true);

  return (
    <>
    <CoffeCardContainer>
      <Image src={img} alt="" width={64} height={64}/>
      <ActionContainer>
        <Title>{title}</Title>
        <div style={{ display: 'flex' , gap: '0.5rem' }}>
        <PlusMinusContainer>
          <Minus  
            weight="fill" 
            style={{ color:"#8047F8"}} 
            onClick={() => updateQuantity({...props, quantity: quantity > 0 ? quantity - 1 : 0})}
          />
          {quantity}
          <Plus weight="fill" style={{ color:"#8047F8"}} onClick={() => updateQuantity({...props, quantity: quantity + 1})}/>
        </PlusMinusContainer>
          <PlusMinusContainer>
            <button onClick={() => updateQuantity({...props, quantity: 0})}>
              <Trash style={{ color:"#8047F8"}}/>
              Remover
            </button>
          </PlusMinusContainer>
        </div>
      </ActionContainer>
      <p>R$ {priceTreated?.toString()}</p>
    </CoffeCardContainer>
    <Divider />
    </>
  );
}