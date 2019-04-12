import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { Form, FormControl, Button,
  InputGroup, Dropdown, DropdownButton } from 'react-bootstrap'

class ResumeList extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.props.handleSubmit

    this.state = {
      submitted: false,
      resume: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  render () {
    if (this.state.submitted) {
      return <Redirect to="/resumes" />
    }

    const { name, format, content } = this.state.resume
    return (
      <Form id="resumeForm" onSubmit={this.handleSubmit}>
        <InputGroup controlId="resume.name">
          <InputGroup.Prepend>
            <InputGroup.Text>Name: </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="text" value={name} onChange={this.handleChange} />
        </InputGroup>
        <InputGroup controlId="resume.format">
          <InputGroup.Prepend>
            <InputGroup.Text>Format: </InputGroup.Text>
          </InputGroup.Prepend>
          <DropdownButton id="resume.format" title="Format">
            <Dropdown.Item eventKey="text" active={format === 'text'}>Text</Dropdown.Item>
            <Dropdown.Item eventKey="md" active={format === 'md'}>Markdown</Dropdown.Item>
            <Dropdown.Item eventKey="html" active={format === 'html'}>HTML</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <InputGroup controlId="resume.content">
          <InputGroup.Prepend>
            <InputGroup.Text>Body: </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            type="textarea"
            rows="10"
            value={content}
            onChange={this.handleChange}
          />
        </InputGroup>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

export default ResumeList
