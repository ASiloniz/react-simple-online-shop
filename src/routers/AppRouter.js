import React from 'react';
import Header from '../components/Header';

import { BrowserRouter } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
        </div>
    </BrowserRouter>
);

export default AppRouter;