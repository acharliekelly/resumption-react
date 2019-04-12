import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="signInForm" className="modal-form" onSubmit={this.onSignIn}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>*</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link className="btn btn-secondary" to="/">Close</Link>
          { /* <Button variant="secondary" onClick={this.handleClose}>Close</Button> */ }
          <Button variant="primary" onClick={this.onSignIn}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default withRouter(SignIn)
