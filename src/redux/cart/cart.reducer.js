import { CartActionTypes } from "./cart.types";
import { CartItemQuantity, RemoveItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
            
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: CartItemQuantity(state.cartItems, action.payload)
            }
        
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveItemFromCart(state.cartItems, action.payload)
            }

            default:
                return state;

    }

}

export default cartReducer;