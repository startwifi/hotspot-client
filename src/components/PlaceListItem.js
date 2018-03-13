import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

const placeListItem = (props) => {
  const { id, attributes } = props.place
  const statusClasses = classnames('label', {
    'label-primary': attributes.active,
    'label-default': !attributes.active
  })

  return (
    <tr key={id}>
      <td className="project-status">
        <span className={statusClasses}>
          { attributes.active === true ? "Active" : "Inactive" }
        </span>
      </td>
      <td className="project-title">
        <Link to={`/places/${id}`}>{attributes.name}</Link><br />
        <small>{attributes.createdAt}</small>
      </td>
      <td className="project-actions">
        <Link to={`/places/${id}`} className="btn btn-sm btn-white"><i className="fa fa-folder" /> View</Link>&nbsp;
        <Link to={`/places/${id}/edit`} className="btn btn-sm btn-white"><i className="fa fa-pencil" /> Edit</Link>
      </td>
    </tr>
  )
}

export default placeListItem
