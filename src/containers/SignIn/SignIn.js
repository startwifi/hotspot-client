import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import SignInForm from '../../components/Forms/SignInForm'

class SignIn extends Component {
  handleSubmit = values => {
    this.props.onAuth(
      values.email,
      values.password
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
          {errorMessage}
          <SignInForm onSubmit={this.handleSubmit} />
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
