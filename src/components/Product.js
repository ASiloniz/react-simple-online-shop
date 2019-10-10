import React from 'react';


export default class Product extends React.Component {
    state = {
        quantity: 1,
        addedToCart: false,
        quantityInCart: 0
    };

    addToCart = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        const { product } = this.props;
        console.log(cart);

        let inObject = cart.filter(v => v.name === product.name).length;

        if (inObject){
            cart.forEach((cartItem) =>{
                if(cartItem.name === product.name){
                    cartItem.quantityRequired = this.state.quantity;
                }
            });
        } else{
            let cartAddition = {
                id: product.id,
                name: product.name,
                quantityRequired: this.state.quantity
            };
            cart.push(cartAddition);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        console.table(cart);
        this.setState(
            {
                addedToCart: true,
                quantityInCart: this.state.quantity
            }
        );
    };

    render(){
        console.log(this.state);
        const { product } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <h5 className="card-text"><small>price: </small>${product.price}</h5>
                    { product.available_quantity > 0 ?
                        <div>
                            <span className="card-text">
                                <small>Only </small>{product.available_quantity}<small> in stock</small>
                            </span>
                            <button 
                                className="btn btn-sm btn-warning float-right"
                                onClick={this.addToCart}
                            >
                                Add to cart
                            </button>
                        </div> :
                        <p className="text-danger"> product is out of stock </p>
                    }
                </div>
            </div>
        );
    }
}