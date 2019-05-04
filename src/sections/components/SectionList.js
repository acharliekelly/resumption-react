import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import messages from '../messages'
import { getMySections } from '../api'

class SectionList extends Component {
  constructor () {
    super()

    this.state = {
      completed: false,
      sections: []
    }
  }

  componentDidUpdate () {
    getMySections(this.props.user)
      .then(() => {
        alert(messages.sectionIndexSuccess, 'success')
      })
      .then(response => this.setState({
        sections: response.data.sections,
        completed: true
      }))
      .catch(error => {
        console.error(error)
        alert(messages.sectionIndexFailure, 'danger')
      })
  }

  render () {
    const { sections, completed } = this.state
    if (!completed) {
      return <Spinner animation="grow" variant="dark" />
    } else if (sections.length === 0) {
      return <p className="no-data">{messages.noData}</p>
    } else {
      return (
        <Container className="displayPanel section-list">
          {sections.map(section => (
            <Row key={section.id} className="section">
              <Col>{section.name}</Col>
              <Col>{section.type}</Col>
              <Col>
                <Link
                  className="btn btn-outline-primary"
                  to={'/sections/' + section.id}>Open
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      )
    }
  }
}

export default SectionList
