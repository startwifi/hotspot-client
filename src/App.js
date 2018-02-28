import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/sign_in" component={() => (<h1>Sign in</h1>)} />
        </Switch>
      </Layout>
    )
  }
}

export default App
