import React, { Component } from 'react'

import ResumeForm from './ResumeForm'
import { updateResume } from '../api'
import messages from '../messages'

class EditResume extends Component {
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

    updateResume(user, this.state.resume)
      .then(() => alert(messages.updateResourceSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        alert(messages.updateResourceFailure, 'danger')
      })
  }

  render () {
    return <ResumeForm user={this.props.user} handleSubmit={this.handleSubmit} />
  }
}

export default EditResume
