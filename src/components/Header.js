import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <h1 className="navbar-brand">Myos Shopping App</h1>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Products</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;


