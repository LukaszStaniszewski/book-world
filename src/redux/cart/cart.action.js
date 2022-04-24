import { CartActionTypes } from "./cart.types"

export const toggleHidden = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN,   
})

export const toggleHiddenImage = () => ({
    type: CartActionTypes.TOGGLE_HIDDEN_IMAGE,   
})

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
})
