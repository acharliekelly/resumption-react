import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <NavLink to="/change-password" className="btn btn-outline-dark">Change Password</NavLink>
    <NavLink to="/sign-out" className="btn btn-outline-dark">Sign Out</NavLink>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <NavLink to="/sign-up" className="btn btn-dark">Sign Up</NavLink>
    <NavLink to="/sign-in" className="btn btn-dark">Sign In</NavLink>
  </React.Fragment>
)

const Header = ({ user }) => (
  <Container>
    <Row>
      <Col className="panel-wrapper" md="6">
        <div className="panel titlePanel">
          <h1>
            <Link to="/" className="titleLink">
              <img className="logo" src="logo.png" alt="Logo" />
              Resumption
            </Link>
          </h1>
        </div>
      </Col>
      <Col className="panel-wrapper" md="6">
        <div className="panel authenticationPanel">
          { user ? authenticatedOptions : unauthenticatedOptions }
        </div>
      </Col>
    </Row>
  </Container>
)

export default Header
