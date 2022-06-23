import React,{ createContext,useState} from 'react'
export const ctxCartOrders = createContext({})

const CartOrderContex =({children})=>{    
    let initialState ={
        carts:[]
    }
    const [state, setState] = useState(initialState)

    const addToCartOrder = payload =>{
        setState({
            ...state,
            carts: [...state.carts, payload]
        })
    }
    const removeFromCart = payload =>{
        setState({
            ...state,
            carts: state.carts.filter(item=> item.id !=payload)
        })
    }

    return(
        <ctxCartOrders.Provider value={[state, addToCartOrder, removeFromCart]}>
            {children}
        </ctxCartOrders.Provider>
    )
}

export default CartOrderContex;
