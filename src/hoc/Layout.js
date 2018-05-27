import React, { Component } from 'react'
import Aux from 'hoc/Aux'

class Layout extends Component {
  render () {
    return (
      <Aux>
        <div id="page-wrapper" className="gray-bg">
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Layout
