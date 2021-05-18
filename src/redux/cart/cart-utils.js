export const addItemToCart = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if(existingItem){
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem)
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(item => item.id === itemToRemove.id);
    if(existingItem.quantity == 1){
        return cartItems.filter(item => item.id != itemToRemove.id)
    }
    else if(existingItem){
        return cartItems.map(item => item.id == itemToRemove.id ? {...item, quantity: item.quantity-1} : item)
    }
}