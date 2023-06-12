import { createContext, useState } from "react";
import { CoffeTypes } from "../Components/CoffeCard";

export interface ICoffeeData {
  id: number;
  title: string;
  description: string;
  price: number;
  types: CoffeTypes[];
  img: string;
}

export interface IPurchasedData {
  zipCode: string;
  street: string;
  streetNumber: string;
  extraInfo?: string;
  neighborhood: string;
  city: string;
  stateAbbreviation: string;
  totalAmount: number;
  paymentMethod: string;
}

export interface ICoffeeCart extends ICoffeeData {
  quantity: number;
}

interface ICartContextProvider {
  children: React.ReactNode
}

interface ICartContext {
  cartItems: ICoffeeCart[];
  updateQuantity: (newItem: ICoffeeCart) => void;
  purchasedData: IPurchasedData | undefined,
  insertPurchasedData: (data: IPurchasedData) => void;
}

const CartContext = createContext<ICartContext>({
  cartItems: [],
  updateQuantity: () => {},
  purchasedData: undefined,
  insertPurchasedData: () => {}
});

function CartContextProvider({children}: ICartContextProvider) {
  const [cartItems, setCartItems] = useState<ICoffeeCart[]>([]);
  const [purchasedData, setPurchasedData] = useState<IPurchasedData | undefined>(undefined);

  const updateQuantity = (updatedItem:ICoffeeCart) => {
    let treatedData:ICoffeeCart[] = [];
    treatedData = cartItems.filter(item => item.id !== updatedItem.id);

    if(updatedItem.quantity > 0) {
      treatedData.push(updatedItem);
    }

    setCartItems(treatedData);
  }

  const insertPurchasedData = (data: IPurchasedData) => {
    setPurchasedData(data);
  }

  return (
    <CartContext.Provider value={{
      cartItems: cartItems,
      updateQuantity: updateQuantity,
      purchasedData: purchasedData,
      insertPurchasedData: insertPurchasedData,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };

