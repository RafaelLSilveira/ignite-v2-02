import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ReactElement } from "react";
import { CoffeCard, CoffeTypes } from "../../Components/CoffeCard";
import { ICoffeeData } from "../../context/CartContext";
import { americano, arabe, capuccino, cremoso, cubano, expresso, gelado, havaiano, irlandes, latte, leite, logoInterno, macchiato, mocaccino, quente } from "../../utils/getImg";
import { CoffeContainer, CoffeItems, CoffeTitle, HomeContainer, HomeHeaderContainer, TextContainer, TextSubContainer } from "./styles";

export function Home():ReactElement {
  const coffeList: ICoffeeData[] = [
    {
      id: 1,
      title: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.90,
      types: [CoffeTypes.traditional],
      img: expresso,
    },
    {
      id: 2,
      title: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.90,
      types: [CoffeTypes.traditional],
      img: americano,
    }, 
    {
      id: 3,
      title: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.90,
      types: [CoffeTypes.traditional],
      img: cremoso,
    }, 
    {
      id: 4,
      title: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.ice],
      img: gelado,
    },
    {
      id: 5,
      title: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.withMilk],
      img: leite,
    }, 
    {
      id: 6,
      title: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.withMilk],
      img: latte,
    },
    {
      id: 7,
      title: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.withMilk],
      img: capuccino,
    },
    {
      id: 8,
      title: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.withMilk],
      img: macchiato,
    },
    {
      id: 9,
      title: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.90,
      types: [CoffeTypes.traditional, CoffeTypes.withMilk],
      img: mocaccino,
    },
    {
      id: 10,
      title: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 10.00,
      types: [CoffeTypes.special, CoffeTypes.withMilk],
      img: quente,
    },
    {
      id: 11,
      title: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 10.00,
      types: [CoffeTypes.special,CoffeTypes.alcohol,  CoffeTypes.withMilk],
      img: cubano,
    },
    {
      id: 12,
      title: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 10.00,
      types: [CoffeTypes.special],
      img: havaiano,
    },
    {
      id: 13,
      title: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 10.00,
      types: [CoffeTypes.special],
      img: arabe,
    },
    {
      id: 14,
      title: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 10.00,
      types: [CoffeTypes.special, CoffeTypes.alcohol],
      img: irlandes,
    }
  ];

  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <TextSubContainer>
            <p><ShoppingCart weight="fill" style={{ backgroundColor: "#C47F17" }} /> Compra simples e segura</p>
            <p><Package weight="fill" style={{ backgroundColor: "#574F4D" }} /> Embalagem mantém o café intacto</p>
            <p><Timer weight="fill" style={{ backgroundColor: "#DBAC2C" }} /> Entrega rápida e rastreada</p>
            <p><Coffee weight="fill" style={{ backgroundColor: "#8047F8" }}/> O café chega fresquinho até você</p>
          </TextSubContainer>
        </TextContainer>
        <img src={logoInterno} alt="" />
      </HomeHeaderContainer>

      <CoffeContainer>
        <CoffeTitle>Nossos cafés</CoffeTitle>

        <CoffeItems>
          {coffeList.length > 0 &&
            coffeList.map((coffe) => (
            <CoffeCard {...coffe} />
            ))
          }
        </CoffeItems>
      </CoffeContainer>
    </HomeContainer>
  )
};