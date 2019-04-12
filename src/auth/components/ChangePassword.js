import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import { changePassword } from '../api'
import messages from '../messages'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert(messages.changePasswordSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert(messages.changePasswordFailure, 'danger')
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="signInForm" className="modal-form" onSubmit={this.onChangePassword}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Old Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                name="oldPassword"
                value={oldPassword}
                type="password"
                placeholder="Old Password"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>New Password</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                name="newPassword"
                value={newPassword}
                type="password"
                placeholder="New Password"
                onChange={this.handleChange}
              />
            </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Link className="btn btn-secondary" to="/">Close</Link>
          <Button variant="primary" onClick={this.onChangePassword}>Submit</Button>
        </Modal.Footer>
      </Modal.Dialog>
    )
  }
}

export default withRouter(ChangePassword)
