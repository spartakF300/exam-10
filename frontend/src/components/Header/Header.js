import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import { NavLink as BrowserLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-warning mb-3">
            <Nav pills  className="border">
                <NavItem className="mt-3 mb-3 ml-3">
                    <NavLink  tag={BrowserLink} to="/" exact >News</NavLink>
                </NavItem>
                <NavItem className="mt-3 mb-3 mr-3 ml-auto ">
                    <NavLink  tag={BrowserLink} to="/add" exact >Add new </NavLink>
                </NavItem>

            </Nav>
        </div>
    );
};

export default Header;