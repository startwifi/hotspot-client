import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import Layout from './hoc/Layout/Layout'
import SignIn from './containers/SignIn/SignIn'
import SignOut from './containers/SignOut/SignOut'

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignIn()
  }

  render () {
    return (
      <Layout>
        <Switch>
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_out" component={SignOut} />
          <Route path="/" exact component={() => (<h1>Dashboard</h1>)} />
        </Switch>
      </Layout>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
