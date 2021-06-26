import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          AMP DEMO
        </NavLink>
      </div>
      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/product" activeClassName="activeClass">
            Product
          </NavLink>
          <NavLink to="/about" activeClassName="activeClass">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="activeClass">
            Contact
          </NavLink>
          <NavLink to="/users" activeClassName="activeClass">
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
