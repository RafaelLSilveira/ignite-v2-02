import { FormatMoney } from "format-money-js";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext, ICoffeeData } from "../../context/CartContext";
import { ActionContainer, CoffeCardContainer, Image, PlusMinusContainer, SubTitle, Tag, Title } from "./styles";

export enum CoffeTypes {
  traditional = "Tradicional",
  withMilk = "Com leite",
  ice = "Gelado",
  special = "Especial",
  alcohol = "Alcoólico"
}  

export function CoffeCard(props: ICoffeeData) {
  const {
    id,
    title,
    description,
    price,
    types,
    img,
  } = props;

  const { updateQuantity } = useContext(CartContext);

  const [localQuantity, setLocalQuantity] = useState(0);

  const fm = new FormatMoney({
    decimals: 2,
    separator: ".",
    decimalPoint: ","
  });

  const priceTreated = fm.from(price, true);

  return (
    <CoffeCardContainer>
      <Image src={img} alt="" />
      <div 
        style={{ 
          display: "flex",
          alignContent: "center",
          justifyContent:"center",
          gap: "0.25rem"
        }}
      >
        {types.map(tag => <Tag>{tag}</Tag>)}
      </div>
      <Title>{title}</Title>
      <SubTitle>{description}</SubTitle>
      <ActionContainer>
        <p><span>R$</span>{priceTreated?.toString()}</p>
        <PlusMinusContainer>
          <Minus  weight="fill" onClick={() => setLocalQuantity(state => state === 0 ? 0 : state - 1)}/>
          {localQuantity}
          <Plus weight="fill" onClick={() => setLocalQuantity(state => state + 1)}/>
        </PlusMinusContainer>
        <ShoppingCart weight="fill" className="shopping" onClick={() => updateQuantity({...props, quantity: localQuantity})} />
      </ActionContainer>
    </CoffeCardContainer>
  );
}