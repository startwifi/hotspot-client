import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../../store/actions/index'

class List extends Component {
  componentDidMount () {
    this.props.onFetchCompanies(this.props.token)
  }

  render () {
    let companies = null

    if (!this.props.loading && this.props.companies) {
      companies = this.props.companies.map(company => (
        <tr key={company.id}>
          <td className="project-status">
            <span className="">
              { company.attributes.active === true ? "Active" : "Inactive" }
            </span>
          </td>
          <td className="project-title">
            <Link to={`/companies/${company.id}`}>{company.attributes.name}</Link><br />
            <small>{company.attributes.createdAt}</small>
          </td>
          <td className="project-actions">
            <Link to={`/companies/${company.id}`} className="btn btn-sm btn-white"><i className="fa fa-folder" /> View</Link>
            <Link to={`/companies/${company.id}/edit`} className="btn btn-sm btn-white"><i className="fa fa-pencil" /> Edit</Link>
          </td>
        </tr>
      ))
    }

    return (
      <div>
        <h1>Companies</h1>
        <div className="row">
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="col-md-8 col-md-offset-2">
              <div className="ibox float-e-margins">
                <div className="ibox-title">
                  <h5>Companies</h5>
                  <div className="ibox-tools">
                    <Link to="/companies/new" className="btn btn-primary btn-xs">Create new company</Link>
                  </div>
                </div>
                <div className="ibox-content">
                  <div className="project-list">
                    <table className="table table-hover">
                      <tbody>
                        {companies}
                      </tbody>
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

const mapStateToProps = state => {
  return {
    companies: state.company.companies,
    loading: state.company.loading,
    token: state.auth.token
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onFetchCompanies: (token) => dispatch(actions.fetchCompanies(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
