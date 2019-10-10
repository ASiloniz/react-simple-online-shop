import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ProductList} exact={true} /> 
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;