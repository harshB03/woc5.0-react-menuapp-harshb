// import React, {ReactNode ,useContext } from 'react'
// import { createContext } from 'react'


// const Cart = createContext();

// const Context = ({children}) =>{
//   const [state,dispatch] = useReducer(reducer,{
//     product:products,
//     cart:[]
//   })
//   return <Cart.Provider>{children} </Cart.Provider>
// }

// const ShoppingCartProviderProps = {
//   children:ReactNode
// }
// const cartItem{
//   id:number
//   quantity:number
// }

// const ShoppingCartContext ={
//   getItemQuantity:(id:number)=>number
//   increaseItemQuantity:(id:number)=>void
//   decreaseItemQuantity:(id:number)=>void
//   removeFromCart:(id:number) => void
// }

// const ShoppingCartContext = createContext({})
// export default function useShoppingCart() {
//   return (
//     useContext(ShoppingCartContext)
//   )
// }

// export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
//   return (
//     const [cartItem, setCardItems] = useState<cartItems[]>([ )>
//     <ShoppingCartContext.Provider value={{}}>
//     {children}
//     </ShoppingCartContext.Provider>
//   )
// }