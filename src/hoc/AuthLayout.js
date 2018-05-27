import React, { Component } from 'react'
import Aux from 'hoc/Aux'
import Toolbar from 'components/Toolbar'

class AuthLayout extends Component {
  render () {
    return (
      <Aux>
        <div id="page-wrapper" className="gray-bg">
          <Toolbar />
          <div className="wrapper wrapper-content">
            <div className="container">{this.props.children}</div>
          </div>
        </div>
      </Aux>
    )
  }
}

export default AuthLayout
