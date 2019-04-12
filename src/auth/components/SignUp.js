import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      show: false,
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        alert(messages.signUpFailure, 'danger')
      })

    this.setState({ show: false })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <Modal.Dialog show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="modal-form" onSubmit={this.onSignUp}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup 

            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              required
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <label htmlFor="passwordConfirmation">Confirm Password</label>
            <input
              required
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>Close</Button>
          <Button variant="primary" onClick={this.onSignUp}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default withRouter(SignUp)
