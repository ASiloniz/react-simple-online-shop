import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import NotFoundPage from '../components/NotFoundPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ProductList} exact={true} /> 
                <Route path="/cart" component={Cart} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;