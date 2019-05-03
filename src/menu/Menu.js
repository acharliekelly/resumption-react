import React from 'react'
import './menu.scss'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const authenticated = (
  <div className="panel menuPanel">
    <header>Menu</header>
    <Nav className="flex-column" variant="pills">
      <Nav.Item>
        <NavLink to="/resumes" exact activeClassName="selected">My Resumes</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/new-resume" exact activeClassName="selected">New Resume</NavLink>
      </Nav.Item>
    </Nav>
  </div>
)

const unauthenticated = ''

const Menu = ({ user }) => user ? authenticated : unauthenticated

export default Menu
