import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/index'
import Layout from './hoc/Layout/Layout'
import SignIn from './containers/SignIn/SignIn'
import SignOut from './containers/SignOut/SignOut'
import AdminList from './containers/Admin/List/List'
import AdminNew from './containers/Admin/AdminNew/AdminNew'
import CompaniesList from './containers/Companies/List/List'
import CompanyNew from './containers/Companies/CompanyNew/CompanyNew'

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignIn()
  }

  render () {
    return (
      <Layout isAuthenticated={this.props.isAuthenticated}>
        <Switch>
          <Route path="/admins/new" component={AdminNew} />
          <Route path="/admins" component={AdminList} />
          <Route path="/companies/new" component={CompanyNew} />
          <Route path="/companies" component={CompaniesList} />
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_out" component={SignOut} />
          <Route path="/" exact component={this.props.isAuthenticated ? () => (<h1>Dashboard</h1>) : SignIn} />
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
