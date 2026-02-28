import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToStoredCart, getStoredCart } from '../../utilities/localStorage';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([])
    // console.log(bottles);

    useEffect(()=> {
        const storedCartIds = getStoredCart();
        // console.log(storedCartIds, bottles);
        const storedCarts = [];
        for (const id of storedCartIds)
        {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle)
            {
                storedCarts.push(cartBottle);
            }
        }

        console.log(storedCarts);
        setCart(storedCarts);
    },[bottles])

    const handleAddToCart = (bottle) => {
        // console.log("Bottle will be added to cart", bottle)

        const newCart = [...cart, bottle];
        setCart(newCart);

        addToStoredCart(bottle.id);
    }

    return (
        <div>
            <h3>All The bottles: {bottles.length}</h3>
            <p>Added To Cart: {cart.length}</p>
            <div className='bottle-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id}
                    bottle ={bottle}
                    handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;