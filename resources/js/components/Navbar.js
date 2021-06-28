import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/" className="Navbar-title">CRUD TEST</Link>
            
        </div>
    )
}

export default Navbar;