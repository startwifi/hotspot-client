import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const companyListItem = (props) => {
  const { id, attributes } = props.company

  const statusClasses = classnames('label', {
    'label-primary': attributes.active,
    'label-default': !attributes.active
  })

  return (
    <tr>
      <td className="project-status">
        <span className={statusClasses}>
          { attributes.active === true ? "Active" : "Inactive" }
        </span>
      </td>
      <td className="project-title">
        <Link to={`/companies/${id}`}>{attributes.name}</Link><br />
        <small>{attributes.createdAt}</small>
      </td>
      <td className="project-actions">
        <Link to={`/companies/${id}`} className="btn btn-sm btn-white"><i className="fa fa-folder" /> View</Link>&nbsp;
        <Link to={`/companies/${id}/edit`} className="btn btn-sm btn-white"><i className="fa fa-pencil" /> Edit</Link>
      </td>
    </tr>
  )
}

export default companyListItem
