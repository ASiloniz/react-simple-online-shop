import React from 'react';
import Product from './Product';
import { getProducts } from '../repository';


export default class ProductList extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        getProducts().then((products) => {
            this.setState({ products });
        });
    }

    handleEmptyCart() {
        localStorage.clear();
    }

    render() {
        const { products } =  this.state;
        return (
            <div className=" container">
                <h3 className="card-title">List of Available Products</h3>
                <button onClick={this.handleEmptyCart}>Empty cart</button>
                {products.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        );
    }
}
