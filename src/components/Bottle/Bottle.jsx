import React from 'react';
import './Bottle.css';

const Bottle = ({bottle}) => {
    // console.log(bottle);
    const {name, img} = bottle;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Bottle;