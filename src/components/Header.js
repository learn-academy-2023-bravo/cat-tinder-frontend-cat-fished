import React from "react";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
    <div>
      <Navbar className="bg-gray-800">
        <NavbarBrand href="/" className="me-auto font-display text-white">
          Sakura Date
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 bg-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="self-end" to="/catnew">
                <button className="backdrop bg-white bg-opacity-0 border border-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 hover:bg-opacity-10 text-lg">Create an account</button>
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
  );
};

export default Header;
