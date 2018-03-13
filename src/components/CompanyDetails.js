import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import PlaceListItem from 'components/PlaceListItem'

class CompanyDetails extends Component {
  componentDidMount () {
    this.props.onFetchCompany(this.props.token, this.props.match.params.uuid)
    this.props.onFetchPlaces(this.props.token, this.props.match.params.uuid)
  }

  render () {
    const { company, loading, places } = this.props
    const statusClasses = classnames('label', {
      'label-primary': company && company.attributes.active,
      'label-default': company && !company.attributes.active
    })

    let placeRows = null

    if (loading || !company) {
      return <span />
    }

    if (!loading && places) {
      placeRows = places.map(place => (
        <PlaceListItem key={place.id} place={place} />
      ))
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
                      <dt>Status:</dt> <dd><span className={statusClasses}>{company.attributes.active === true ? "Active" : "Inactive" }</span></dd>
                    </dl>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-5">
                    <dl className="dl-horizontal">
                      <dt>Owner:</dt> <dd><Link to={`/admins/${company.attributes.ownerId}`}>{company.attributes.ownerName}</Link></dd>
                      <dt>Places:</dt> <dd>{places.length}</dd>
                    </dl>
                  </div>
                  <div className="col-lg-7" id="cluster_info">
                    <dl className="dl-horizontal">
                      <dt>Last Updated:</dt> <dd>{company.attributes.updatedAt}</dd>
                      <dt>Created:</dt> <dd> {company.attributes.createdAt}</dd>
                    </dl>
                  </div>
                </div>

                <div className="row m-t-sm">
                  <div className="col-lg-12">
                    <div className="panel blank-panel">
                      <div className="panel-heading">
                        <div className="panel-options">
                          <ul className="nav nav-tabs">
                            <li className="active">
                              <Link to="#tab-1" data-toggle="tab" aria-expanded="true">Places</Link>
                            </li>
                            <li>
                              <Link to="#tab-2" data-toggle="tab" aria-expanded="false">Users messages</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="panel-body">
                        <div className="tab-content">
                          <div className="tab-pane active" id="tab-1">
                            <table className="table table-hover">
                              <tbody>
                                {placeRows}
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane" id="tab-2">
                          </div>
                        </div>
                      </div>
                    </div>
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
