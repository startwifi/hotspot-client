import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="gray-bg">
        <Grid>
          <Row>
            <Col lg={9}>
              <div className="wrapper wrapper-content">
                <h2>Dashboard</h2>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
