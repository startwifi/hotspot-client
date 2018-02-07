import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Aux from '../Aux/Aux'

const layout = (props) => (
  <Aux>
    <div className="gray-bg">
      <Grid>
        <Row>
          <Col lg={9}>
            <div className="wrapper wrapper-content">
              {props.children}
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  </Aux>
)

export default layout
