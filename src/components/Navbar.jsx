import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar1 from '../assets/avatar1.png';


export const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="nav">

                <div className="profile">
                    <img src={avatar1} alt="avatar" />
                </div>
                
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/about" exact activeClassName="active">About</NavLink>
                        <NavLink to="/portfolios" exact activeClassName="active">Portfolios</NavLink>
                        <NavLink to="/blogs" exact activeClassName="active">Blogs</NavLink>
                        <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>@2021 Lorem ipsum dolor.</p>
                </footer>
            </nav>
        </div>
    )
}
