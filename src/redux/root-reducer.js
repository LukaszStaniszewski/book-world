import { combineReducers } from "redux";

import categoryReducer from "./category/category.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers ({
    category: categoryReducer,
    user: userReducer,
    cart: cartReducer,
})
