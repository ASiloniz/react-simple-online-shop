import React from 'react';
import Product from './Product';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';


export default class ProductList extends React.Component {
    state = {
        products: [],
        searchedProducts: []
    }

    componentDidMount() {
        getProducts().then((products) => {
            this.setState({ products });
        });
    }

    handleEmptyCart = () => {
        localStorage.clear();
    }

    handleSearchClick = (value) => {

        const valueSearched = value.toLowerCase();
        console.log(!!value);
        if (!!value) {
            console.log("Hello!");
            let foundProducts = this.state.products.filter(v => (v.name.toLowerCase().includes(valueSearched) || v.description.toLowerCase().includes(valueSearched)));
            console.log(foundProducts);
            this.setState(({searchedProducts: foundProducts}));
        } else {
            this.setState((prevState) => {
                return (
                    {searchedProducts: prevState.products }
                );
            });
        }
    }

    render() {
        const { products, searchedProducts } =  this.state;
        console.log(searchedProducts);
        return (
            <div className=" container">
                <h3 className="card-title">List of Available Products</h3>
                <SearchField 
                    placeholder="Search..."
                    onChange={this.handleSearchValue}
                    onSearchClick={this.handleSearchClick}
                    onEnter={this.handleSearchClick}
                    searchText=""
                    classNames="test-class"
                />
                <button onClick={this.handleEmptyCart}>Empty cart</button>
                {searchedProducts.length > 0 ? 
                    searchedProducts.map((product, index) => (
                        <Product product={product} key={index} />
                    )) :
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }
                <Link to="/cart">
                    <button className="btn btn-primary">View Cart</button>
                </Link>
            </div>
        );
    }
}
