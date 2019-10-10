import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

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
        localStorage.setItem('cart', JSON.stringify([]));
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
                {cart !== null && 
                    cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} deleteItem={this.deleteItem} />)
                }
                { cart !== null && 
                    cart.length ? this.getTotal() : <div><h3 className="text-warning">Empty cart!</h3><Link to="/">Go to Product List</Link> </div>
                }
                { cart.length !== 0 && 
                    <button className="btn btn-danger float-right" onClick={this.handleClearCart}>Clear Cart</button>   
                }
            </div>
        );
    }
}