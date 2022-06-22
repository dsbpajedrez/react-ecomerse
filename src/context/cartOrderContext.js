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

    return(
        <ctxCartOrders.Provider value={[state, addToCartOrder]}>
            {children}
        </ctxCartOrders.Provider>
    )
}

export default CartOrderContex;
