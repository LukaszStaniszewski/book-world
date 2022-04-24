import { createSelector } from "reselect";

const selectItem = (state) => state.cart;

export const selectCurrentItems = createSelector (
    [selectItem],
    cart => cart.cartItems,
)

export const selectHiddenStatus = createSelector (
    [selectItem],
    cart => cart.hidden
)

export const selectHiddenStatusOfImage = createSelector (
    [selectItem],
    cart => cart.hiddenImage
)


export const selectCartsPrice = createSelector (
    [selectCurrentItems],
    cartItems => cartItems.reduce((accumulatedValue, currentValue) =>
    accumulatedValue + currentValue.price * currentValue.quantity, 0)
)