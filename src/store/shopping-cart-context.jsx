import { createContext } from "react";

export  const CartContext = createContext({ // ovaj context nam sluzi da iz app componente pakujemo niz ajtema za shoping cart i te ajteme iscitamo u cart komponenti
    items:[],
    addItemToCart: () =>{},
    handleUpdateCart:()=>{},
});
 