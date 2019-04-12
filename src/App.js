import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import Alert from 'react-bootstrap/Alert'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import Menu from './menu/Menu'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import ResumeList from './resumes/components/ResumeList'
import CreateResume from './resumes/components/CreateResume'
import ResumeView from './resumes/components/ResumeView'
import EditResume from './resumes/components/EditResume'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type} className="userMessage">
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Menu user={user} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/resumes' render={() => (
            <ResumeList alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/new' render={() => (
            <CreateResume alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/resumes/:id' render={() => (
            <ResumeView alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/resumes/:id/edit' render={() => (
            <EditResume alert={this.alert} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
