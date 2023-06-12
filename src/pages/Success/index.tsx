import { CurrencyCircleDollar, MapPin, Timer } from "phosphor-react";
import { ReactElement, useContext } from "react";
import telemoto from "../../assets/Illustration.svg";
import { CartContext } from "../../context/CartContext";
import { ContainerInfo, PurchaseInfo, PurchaseItem, SubTitle, Title } from "./styles";

export function Success():ReactElement {
  const { purchasedData } = useContext(CartContext);

  console.warn(purchasedData)

  return (<div>
    <Title>Uhu! Pedido confirmado</Title>
    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>

    <ContainerInfo>
      <PurchaseInfo>
        <PurchaseItem>
          <MapPin weight="fill" style={{ color:"#8047F8", marginRight:"1rem" }} width={32} height={32}/> 
          <p>Entrega em Rua {purchasedData?.street}, {purchasedData?.streetNumber} {purchasedData?.neighborhood} 
          - {purchasedData?.city}, {purchasedData?.stateAbbreviation} ({purchasedData?.extraInfo})
          </p>
        </PurchaseItem>
        <PurchaseItem>
          <Timer weight="fill" style={{ color:"#DBAC2C", marginRight:"1rem" }}  width={32} height={32}/> 
          <p>Previsão de entrega <b>20 min - 30 min</b> </p>
        </PurchaseItem>
        <PurchaseItem>
          <CurrencyCircleDollar weight="fill" style={{ color:"#C47F17", marginRight:"1rem" }} width={32} height={32}/> 
          <p>Pagamento na entrega <b>Cartão de Crédito</b></p>
        </PurchaseItem>
      </PurchaseInfo>
      <img src={telemoto} alt="" />
    </ContainerInfo>
  </div>)
};