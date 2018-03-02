import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import SignIn from './containers/SignIn/SignIn'
import SignOut from './containers/SignOut/SignOut'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/dashboard" component={() => (<h1>Dashboard</h1>)} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_out" component={SignOut} />
        </Switch>
      </Layout>
    )
  }
}

export default App
