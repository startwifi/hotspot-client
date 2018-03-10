import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CompanyDetails extends Component {
  componentDidMount () {
    this.props.onFetchCompany(this.props.token, this.props.match.params.uuid)
  }

  render () {
    const { company, loading } = this.props

    if (loading || !company) {
      return <span />
    }

    return (
      <div className="row">
        <div className="col-lg-9">
          <div className="wrapper wrapper-content animated fadeInUp">
            <div className="ibox">
              <div className="ibox-content">

                <div className="row">
                  <div className="col-lg-12">
                    <div className="m-b-md">
                      <Link to={`/companies/${company.id}/edit`} className="btn btn-white btn-xs pull-right">Edit company</Link>
                      <h2>{company.attributes.name}</h2>
                    </div>
                    <dl className="dl-horizontal">
                      <dt>Status:</dt> <dd><span className="">{company.attributes.active === true ? "Active" : "Inactive" }</span></dd>
                    </dl>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-5">
                    <dl className="dl-horizontal">
                      <dt>Owner:</dt> <dd></dd>
                      <dt>Places:</dt> <dd></dd>
                    </dl>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="col-lg-3">
          <div className="wrapper wrapper-content project-manager">
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyDetails
