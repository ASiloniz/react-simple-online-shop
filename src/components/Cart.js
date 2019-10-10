import React from 'react';
import CartItem from './CartItem';

export default class Cart extends React.Component{
    state = {
        cart: JSON.parse(localStorage.getItem('cart'))
    };

    handleClearCart = () => {
        this.setState(() => {
           return {
            cart:[]
           } 
        });
    }

    render(){
        const { cart } = this.state;
        console.log(this.state);
        return(
            <div className=" container">
                <h3 className="card-title">Cart</h3>
                {
                    cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
                }
                <button className="btn btn-danger float-right" onClick={this.handleClearCart}>Clear Cart</button>
            </div>
        );
    }
}