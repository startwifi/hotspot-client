import React from 'react'
import { Link } from 'react-router-dom'

const adminListItem = (props) => {
  const { id, attributes } = props.admin

  return (
    <tr>
      <td className="project-status">
        <span className="">
          { attributes.active === true ? "Active" : "Inactive" }
        </span>
      </td>
      <td className="project-title">
        <Link to={`/admins/${id}`}>{attributes.firstName} {attributes.lastName}</Link><br />
        <small>{attributes.createdAt}</small>
      </td>
      <td className="project-actions">
        <Link to={`/admins/${id}`} className="btn btn-sm btn-white"><i className="fa fa-folder" /> View</Link>
        <Link to={`/admins/${id}/edit`} className="btn btn-sm btn-white"><i className="fa fa-pencil" /> Edit</Link>
      </td>
    </tr>
  )
}

export default adminListItem
