import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <h1 className="navbar-brand">Myos Shopping App</h1>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink activeClassName="is-active" to="/" exact={true}>Products List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="is-active" to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </div>     
            
        </nav>
        
    );
};

export default Header;


