import React from "react"
import { useState } from "react";
import {FaBars,FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../slider/img/logo.png"

const Navbar = () => {
    return(
        <>
        <nav className='navar'>
            <div className="navcontanier">
                <Link to="/" className="nav-logo">
                <img src={logo} alt="logo" width="250"/>
                </Link>
                <div className='navbar-contain'>
                <ul>
                    <li><a href="/" className="nav-tex">HOME</a></li>
                    <li><a href="/Stay" className="nav-tex">STAY</a></li>
                    <li><a href="/ABOUT" className="nav-tex">ABOUT US</a></li>
                    <li><a href="/RESTAURANT" className="nav-tex">RESTAURANT</a></li>
                    {/*<li><a href="/ACTIVITIES" className="nav-tex">ACTIVITIES</a></li>*/}
                    <li><a href="/Contact" className="nav-tex"> CONTACT US</a></li>
                    <li><a href="/" className="nav-btn">BOOK NOW</a></li>
                    <li><a href="/"  class="icons"><FaBars/></a></li>
                </ul>
                </div>

            </div>
        </nav>
    </>
    )
}
export default Navbar;