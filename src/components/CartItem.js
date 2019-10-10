import React from 'react';

const CartItem = (props) => {
    const item = props.item;
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <h5 className="card-text"><small>price: </small>$MAZOPASTA!</h5>
                <span className="card-text text-success"><small>Quantity: </small>{item.quantityRequired}</span>
            </div>
        </div>
    );
};

export default CartItem;