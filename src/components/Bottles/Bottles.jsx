import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {
    const bottles = use(bottlesPromise);
    // console.log(bottles);
    return (
        <div>
            <h3>All The bottles: {bottles.length}</h3>
            <div>
                {
                    bottles.map(bottle => <Bottle key={bottle.id}
                    bottle ={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;