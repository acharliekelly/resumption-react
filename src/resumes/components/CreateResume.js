import React, { Component } from 'react'

import ResumeForm from './ResumeForm'
import { createResume } from '../api'
import messages from '../messages'

class CreateResume extends Component {
  constructor () {
    super()

    this.state = {
      submitted: false,
      resume: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    createResume(user, this.state.resume)
      .then(() => alert(messages.createResourceSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        alert(messages.createResourceFailure, 'danger')
      })
  }

  render () {
    return <ResumeForm user={this.props.user} handleSubmit={this.handleSubmit} />
  }
}

export default CreateResume
