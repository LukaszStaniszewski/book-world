import { CartActionTypes } from "./cart.types";
import { CartItemQuantity, RemoveOneItemFromCart, DeleteItemFromCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    hiddenImage: true,
    cartItems: [],
    oneItem: null,
  
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.TOGGLE_HIDDEN_IMAGE: 
        return {
            ...state,
            hiddenImage: !state.hiddenImage
        }    
            
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: CartItemQuantity(state.cartItems, action.payload)
            }
        
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: RemoveOneItemFromCart(state.cartItems, action.payload)
            }

            
        case CartActionTypes.TO_ITEM_DETAILS:
            return {
                ...state,
                oneItem: action.payload
            }
        
         
            default:    
                return state;

    }

}

export default cartReducer;