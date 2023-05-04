import React from "react";
import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Header = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="bg-gray-300">
        <NavbarBrand href="/" className="me-auto font-display">
          Catfished
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 bg-white" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="self-end" href="/catnew">Create an account</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="self-end" href="/catedit">
                Edit Account  
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;