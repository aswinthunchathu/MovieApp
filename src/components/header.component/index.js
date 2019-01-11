import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './index.css';

class Header extends Component {
    render() {
        return (
            <nav header-component='' className="navbar navbar-expand navbar-dark pl-0 pr-0">
                <div className="container">
                    <NavLink exact to="/" className="nav-brand mr-3">
                    <i className="fas fa-video fa-5x text-danger"></i>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Featured Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/search" className="nav-link">Search Movie</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
