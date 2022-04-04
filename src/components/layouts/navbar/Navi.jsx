import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function Navi() {
  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/users"} className="nav-link">
              Users
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Navi;
