import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <NavLink to="/">
                    <img
                        src={logo}
                        height={200}
                        style={{ marginTop: "-40px" }}
                    ></img>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span
                        className="navbar-toggler-icon"
                        style={{ color: "white", backgroundColor: "white" }}
                    ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" style={{ marginTop: "-40px" }}>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link "
                                aria-current="page"
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/capablities"
                            >
                                Capabilities
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/business"
                            >
                                Business
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/careere"
                            >
                                Careere
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/life"
                            >
                                Life@metamicrosys
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                to="/contact"
                            >
                                contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link disabled"
                                aria-disabled="true"
                            >
                                Disabled
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
