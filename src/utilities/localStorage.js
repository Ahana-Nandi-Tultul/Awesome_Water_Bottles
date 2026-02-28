

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

export{
    getCartFromLocalStorage as getStoredCart ,
    addItemToCartLocalStorage as addToStoredCart,
}