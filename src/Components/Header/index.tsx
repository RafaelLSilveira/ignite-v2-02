import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { CartContext } from "../../context/CartContext";
import { ActionsContainer, HeaderContainer } from "./styles";

export function Header() {
  const { cartItems } = useContext(CartContext);

  return(
    <HeaderContainer>
      <NavLink to="/" >
        <img src={logo} alt="" />
      </NavLink>
      <ActionsContainer>
        <p><MapPin weight="fill"/> Porto Alegre, RS</p>
       <NavLink to="/checkout" style={{ position: "relative" }}>
         {cartItems.length > 0 && <span>{cartItems.length}</span>}
          <ShoppingCart weight="fill" className="shopping" />
        </NavLink> 
      </ActionsContainer>
    </HeaderContainer>
  )
} 