import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import SignIn from './containers/SignIn/SignIn'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/dashboard" component={() => (<h1>Dashboard</h1>)} />
          <Route path="/sign_in" component={SignIn} />
        </Switch>
      </Layout>
    )
  }
}

export default App
