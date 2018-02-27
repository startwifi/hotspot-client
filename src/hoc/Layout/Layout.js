import React from 'react'
import Aux from '../Aux/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Aux>
    <div id="page-wrapper" className="gray-bg">
      <Toolbar />
      <div className="wrapper wrapper-content">
        <div className="container">
          {props.children}
        </div>
      </div>
    </div>
  </Aux>
)

export default layout
