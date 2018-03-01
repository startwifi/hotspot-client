import React, { Component } from 'react'
import { connect } from 'react-redux'
import Aux from '../Aux/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

class Layout extends Component {
  render () {
    return (
      <Aux>
        <div id="page-wrapper" className="gray-bg">
          <Toolbar isAuthenticated={this.props.isAuthenticated} />
          <div className="wrapper wrapper-content">
            <div className="container">
              {this.props.children}
            </div>
          </div>
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout)
