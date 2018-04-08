import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminListItem from 'components/AdminListItem'

class AdminList extends Component {
  componentDidMount () {
    this.props.onFetchAdmins(this.props.token)
  }

  render () {
    let admins = null

    if (!this.props.loading && this.props.admins) {
      admins = this.props.admins.map(admin => (
        <AdminListItem key={admin.id} admin={admin} />
      ))
    }

    return (
      <div>
        <h1>Admins</h1>
        <div className="row">
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Admins</h5>
                  <div className="ibox-tools">
                    <Link to="/admins/new" className="btn btn-primary btn-xs">
                      Create new admin
                    </Link>
                  </div>
                </div>
                <div className="ibox-content">
                  <div className="project-list">
                    <table className="table table-hover">
                      <tbody>{admins}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminList
