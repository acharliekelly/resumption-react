import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

import '../resume.scss'
import { getResume } from '../api'
import messages from '../messages'

class ResumeView extends Component {
  constructor () {
    super()

    this.state = {
      resume: null
    }
  }

  componentDidUpdate () {
    getResume(this.props.user)
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
    const { resume } = this.state

    if (!resume) {
      return <Spinner animation="grow" variant="dark" />
    } else {
      const url = this.props.match.url
      return (
        <Container className="resume-view">
          <Row>
            <Col className="col-2">Name: </Col>
            <Col className="col-8">{resume.name}</Col>
            <Col className="col-2" />
          </Row>
          <Row>
            <Col className="col-2">Format: </Col>
            <Col className="col-4">{resume.format}</Col>
            <Col />
          </Row>
          <Row>
            <Col className="col-2" />
            <Col className="col-8">
              {resume.content}
            </Col>
            <Col className="col-2">
              <Link className="btn btn-outline-secondary" to={url + '/edit'}>Edit</Link>
              <Link className="btn btn-outline-secondary" to={url + '/delete'}>Delete</Link>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default ResumeView
