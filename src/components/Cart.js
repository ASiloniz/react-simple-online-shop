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
    };

    getTotal = () => {
        let totalAmount = 0;
        this.state.cart.forEach((item) => {
            totalAmount += item.quantityRequired * item.price;
        });
        return (
            <div>
                <h4>
                    <small>Total Amount:</small><span className="float-right text-primary">${totalAmount}</span>
                </h4>
            </div>
        );
    };

    deleteItem = (itemToDelete) => {
        let newCart = this.state.cart.filter((v) => v.name !== itemToDelete);
        this.setState({cart: newCart});
        localStorage.setItem('cart', JSON.stringify(newCart));
        console.log(JSON.parse(localStorage.getItem('cart')));
    };

    render(){
        const { cart } = this.state;
        return(
            <div className=" container">
                <h3 className="card-title">Cart</h3>
                {
                    cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} deleteItem={this.deleteItem} />)
                }
                { 
                    cart.length ? this.getTotal() : <h3 className="text-warning">Empty cart!</h3>
                }
                <button className="btn btn-danger float-right" onClick={this.handleClearCart}>Clear Cart</button>
            </div>
        );
    }
}