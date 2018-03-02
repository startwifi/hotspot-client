import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleInputChange = event => {
    const controlName = event.target.name
    this.setState({[controlName]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onAuth(
      this.state.email,
      this.state.password
    )
  }

  render () {
    let errorMessage = null
    let authRedirect = null

    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error}</p>
      )
    }

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    return (
      <div className="middle-box text-center loginscreen animated fadeInDown">
        {authRedirect}
        <div>
          <div>
            <h1 className="logo-name">H+</h1>
          </div>
          <h3>Welcome to Hotspot+</h3>
          <p>Sign in. To see it in action.</p>
          <form onSubmit={this.handleSubmit} className="m-t">
            {errorMessage}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
                className="form-control"
                value={this.state.email}
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
                className="form-control"
                value={this.state.password}
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <button type="submit" className="btn btn-primary block full-width m-b">Sign in</button>
          </form>
          <p className="m-t"><small>Made with &hearts; 2018</small></p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.signIn(email, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
