export const CartItemQuantity = (cartItems, addItem) => {
    const existingCartItem = 
    cartItems.find(item => item.id === addItem.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === addItem.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem)
    }

    return[...cartItems, {...addItem, quantity: 1}]
};

export const ItemCount = (item) => (
  item.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
       
)

export const RemoveItemFromCart = (cartItems, removeItem) => {
  const existingCartItem = 
  cartItems.find(item => item.id === removeItem.id)

  if (existingCartItem) {
      return cartItems.map(cartItem =>
          cartItem.id === removeItem.id ? 
          {...cartItem, quantity: cartItem.quantity - 1}
          : cartItem)
  }

  return[...cartItems]
}


     
      
      
    
   
