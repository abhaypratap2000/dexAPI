export const addItemToCart = (cartItems, cartAddItem)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === cartAddItem.id
    );
    if(existingCartItem){
        return cartItems.map((cartItem)=>cartItem.id === cartAddItem.id ? {...cartItem , quantity:cartItem+1}:cartItem)
    }
    return[...cartItems,{...cartAddItem , quantity:1 }];
}


export const removeItemToCart = (cartItems, cartAddItem)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=> cartItem.id === cartAddItem.id
    );
    if(existingCartItem === 1){
        return cartItems.filter(cartItem=>cartItem => cartItem.id!== cartAddItem.id)
    }
    return cartItems.map((cartItem)=> cartItem.id === cartAddItem.id ?{...cartItem , quantity: cartItem- 1}:cartItem)
}

