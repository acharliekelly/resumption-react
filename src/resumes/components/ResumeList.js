import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import '../resume.scss'
import { getMyResumes } from '../api'
import messages from '../messages'

class ResumeList extends Component {
  constructor () {
    super()

    this.state = {
      resumes: []
    }
  }

  componentDidUpdate () {
    getMyResumes(this.props.user)
      .then(() => {
        alert(messages.resourceIndexSuccess, 'success')
      })
      .then(response => this.setState({
        resumes: response.data.resumes
      }))
      .catch(error => {
        console.error(error)
        alert(messages.resourceIndexFailure, 'danger')
      })
  }

  render () {
    const { resumes } = this.state
    if (resumes.length === 0) {
      return <Spinner animation="grow" variant="dark" />
    } else {
      return (
        <Container className="displayPanel resume-list">
          {resumes.map(resume => (
            <Row key={resume.id} className="resume">
              <Col>{resume.name}</Col>
              <Col>{resume.format}</Col>
              <Col>
                <Link
                  className="btn btn-outline-primary"
                  to={'/resumes/' + resume.id}>Open</Link>
              </Col>
            </Row>
          ))}
        </Container>
      )
    }
  }
}

export default ResumeList
