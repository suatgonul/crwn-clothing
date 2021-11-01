export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(item => {
            if (item.id === cartItemToAdd.id) {
                return {...item, quantity: item.quantity + 1}
            } else {
                return item;
            }
        });
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export const decreaseItem = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToDecrease.id);

    if (existingCartItem.quantity === 1) {
        return removeItemFromCart(cartItems, existingCartItem);
    }

    return cartItems.map(item => {
        if (item.id === cartItemToDecrease.id) {
            return {...item, quantity: item.quantity - 1}
        } else {
            return item;
        }
    });
}