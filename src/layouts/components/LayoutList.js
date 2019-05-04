import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import messages from '../messages'
import { getMyLayouts } from '../api'

class LayoutList extends Component {
  constructor () {
    super()

    this.state = {
      completed: false,
      layouts: []
    }
  }

  componentDidUpdate () {
    getMyLayouts(this.props.user)
      .then(() => {
        alert(messages.layoutIndexSuccess, 'success')
      })
      .then(response => this.setState({
        layouts: response.data.layouts,
        completed: true
      }))
      .catch(error => {
        console.error(error)
        alert(messages.layoutIndexFailure, 'danger')
      })
  }

  render () {
    const { layouts, completed } = this.state
    if (!completed) {
      return <Spinner animation="grow" variant="dark" />
    } else if (layouts.length === 0) {
      return <p className="no-data">{messages.noData}</p>
    } else {
      return (
        <Container className="displayPanel layout-list">
          {layouts.map(layout => (
            <Row key={layout.id} className="layout">
              <Col>{layout.name}</Col>
              <Col>{layout.public}</Col>
              <Col>
                <Link
                  className="btn btn-outline-primary"
                  to={'/layouts/' + layout.id}>Open
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      )
    }
  }
}

export default LayoutList
