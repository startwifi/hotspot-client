import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

class PlaceDetails extends Component {
  componentDidMount () {
    this.props.onFetchPlace(this.props.token, this.props.match.params.uuid)
  }

  render () {
    const { place, loading } = this.props
    const statusClasses = classnames('label', {
      'label-primary': place && place.attributes.active,
      'label-default': place && !place.attributes.active
    })

    if (loading || !place) {
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
                      <Link to={`/places/${place.id}/edit`} className="btn btn-white btn-xs pull-right">Edit place</Link>
                      <h2>{place.attributes.name}</h2>
                    </div>
                    <dl className="dl-horizontal">
                      <dt>Status:</dt> <dd><span className={statusClasses}>{place.attributes.active === true ? "Active" : "Inactive" }</span></dd>
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

export default PlaceDetails
