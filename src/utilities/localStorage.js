

const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString)
    {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const savedCartToLocalStorage = (cart) => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    const savedCart = [...cart, id];
    savedCartToLocalStorage(savedCart);
}

const removeFromLocalStorage = id => {
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId=> storedId !== id);
    savedCartToLocalStorage(remainingCart);

}

export{
    getCartFromLocalStorage as getStoredCart ,
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart
}