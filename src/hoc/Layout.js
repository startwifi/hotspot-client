import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Aux from 'hoc/Aux'
import Toolbar from 'components/Toolbar'

class Layout extends Component {
  render () {
    const layout = (
      <div>
        <Toolbar />
        <div className="wrapper wrapper-content">
          <div className="container">{this.props.children}</div>
        </div>
      </div>
    )

    return (
      <Aux>
        <div id="page-wrapper" className="gray-bg">
          {this.props.isAuthenticated ? layout : this.props.children}
        </div>
      </Aux>
    )
  }
}

Layout.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default Layout
