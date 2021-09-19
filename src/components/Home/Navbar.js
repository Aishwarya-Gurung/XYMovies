import React from 'react'
import './navbar.css';
import {BrowserRouter, Link} from "react-router-dom"

const Navbar=() => {
    return (
        <>
            <div className="navbar">
                <h1 className="logo">XYZ Movies</h1>
                <Link to='/WatchLater'>Watch Later</Link>
                <div className="dropdown">
                    <button className="dropbtn">Movies 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to='/Action'>Action</Link>
                        <Link to='/Crime'>Crime</Link>
                        <Link to='/Drama'>Drama</Link>
                        <Link to='/Thriller'>Thriller</Link>
                    </div>
                </div>
                <Link to='/'>Home</Link>
            </div>
        </>
    )
}

export default Navbar
