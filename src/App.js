import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from 'store/actions/index'
import AuthLayout from 'hoc/AuthLayout'
import Layout from 'hoc/Layout'
import SignInPage from 'containers/SignInPage'
import SignOutPage from 'containers/SignOutPage'
import AdminListPage from 'containers/AdminListPage'
import AdminNewPage from 'containers/AdminNewPage'
import AdminEditPage from 'containers/AdminEditPage'
import CompanyListPage from 'containers/CompanyListPage'
import CompanyNewPage from 'containers/CompanyNewPage'
import CompanyEditPage from 'containers/CompanyEditPage'
import CompanyDetailsPage from 'containers/CompanyDetailsPage'
import PlaceDetailsPage from 'containers/PlaceDetailsPage'
import NotFound from 'components/NotFound'

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignIn()
  }

  render () {
    const authLayout = (
      <AuthLayout>
        <Switch>
          <Route path="/admins/new" component={AdminNewPage} />
          <Route path="/admins/:uuid/edit" component={AdminEditPage} />
          <Route path="/admins" component={AdminListPage} />
          <Route path="/companies/new" component={CompanyNewPage} />
          <Route path="/companies/:uuid/edit" component={CompanyEditPage} />
          <Route path="/companies/:uuid" component={CompanyDetailsPage} />
          <Route path="/companies" component={CompanyListPage} />
          <Route path="/places/:uuid" component={PlaceDetailsPage} />
          <Route path="/sign_out" component={SignOutPage} />
          <Route path="/" exact component={() => <h1>Dashboard</h1>} />
          <Route component={NotFound} />
        </Switch>
      </AuthLayout>
    )

    const layout = (
      <Layout>
        <Switch>
          <Route path="/sign_in" component={SignInPage} />
          <Route path="/" exact component={SignInPage} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    )

    return this.props.isAuthenticated ? authLayout : layout
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
