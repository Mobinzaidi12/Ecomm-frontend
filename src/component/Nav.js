import React from "react";
import "../App.css"
import { Link, useNavigate } from "react-router-dom";


const Nav = () => {

    const auth = localStorage.getItem('users');
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }

    return (
        <div className="nav_top">
            {auth ?
                <ul>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/add-product'>Add Products</Link></li>
                    <li><Link to='/update'>Update Products</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <Link className="right" onClick={logout} to='/signup'>Logout</Link>
                </ul> :
                <ul className="right">
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            }

        </div >
    );
}
export default Nav;