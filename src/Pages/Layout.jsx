import { Outlet, Link } from "react-router-dom";
// import Homepage from './Pages/smartlux';
import "./Layout.css";
import React from "react";
import logo from './Group 407.png';


const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
      <div className="logo-div">
          <img src={logo} alt="logo" className="logo1-div" />
      </div>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;