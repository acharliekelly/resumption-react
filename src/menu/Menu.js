import React from 'react'
import './menu.scss'

import Nav from 'react-bootstrap/Nav'

const authenticated = (
  <Nav className="flex-column" variant="pills">
    <Nav.Item>
      <Nav.Link href="/resumes">My Resumes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/new">New Resume</Nav.Link>
    </Nav.Item>
  </Nav>
)

const unauthenticated = ''

const Menu = ({ user }) => user ? authenticated : unauthenticated

export default Menu
