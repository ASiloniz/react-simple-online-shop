import React from 'react';

const Product = (props) => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.product.name}</h4>
            <p className="card-text">{props.product.description}</p>
        </div>
    </div>
); 

export default Product;