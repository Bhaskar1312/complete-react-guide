import {createContext} from "react";

export const CartContext = createContext({
    items: [], // better for auto-complete
    addItemToCart: ()=>{},
});