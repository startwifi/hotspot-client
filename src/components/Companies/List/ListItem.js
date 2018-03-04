import React from 'react'
import { Link } from 'react-router-dom'

const listItem = (props) => {
  const { id, attributes } = props.company

  return (
    <tr>
      <td className="project-status">
        <span className="">
          { attributes.active === true ? "Active" : "Inactive" }
        </span>
      </td>
      <td className="project-title">
        <Link to={`/companies/${id}`}>{attributes.name}</Link><br />
        <small>{attributes.createdAt}</small>
      </td>
      <td className="project-actions">
        <Link to={`/companies/${id}`} className="btn btn-sm btn-white"><i className="fa fa-folder" /> View</Link>
        <Link to={`/companies/${id}/edit`} className="btn btn-sm btn-white"><i className="fa fa-pencil" /> Edit</Link>
      </td>
    </tr>
  )
}

export default listItem
