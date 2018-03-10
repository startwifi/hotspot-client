import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import Layout from 'hoc/Layout'
import SignInPage from 'containers/SignInPage'
import SignOutPage from 'containers/SignOutPage'
import AdminListPage from 'containers/AdminListPage'
import AdminNewPage from 'containers/AdminNewPage'
import CompanyListPage from 'containers/CompanyListPage'
import CompanyNewPage from 'containers/CompanyNewPage'
import CompanyDetailsPage from 'containers/CompanyDetailsPage'

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignIn()
  }

  render () {
    return (
      <Layout isAuthenticated={this.props.isAuthenticated}>
        <Switch>
          <Route path="/admins/new" component={AdminNewPage} />
          <Route path="/admins" component={AdminListPage} />
          <Route path="/companies/new" component={CompanyNewPage} />
          <Route path="/companies/:uuid" component={CompanyDetailsPage} />
          <Route path="/companies" component={CompanyListPage} />
          <Route path="/sign_in" component={SignInPage} />
          <Route path="/sign_out" component={SignOutPage} />
          <Route path="/" exact component={this.props.isAuthenticated ? () => (<h1>Dashboard</h1>) : SignInPage} />
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
