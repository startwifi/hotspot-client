import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

const companyNewForm = props => {
  const { handleSubmit, pristine, submitting, admins, errors } = props

  const ownerOptions = admins.map(admin => (
    <option value={admin.id} key={admin.id}>
      {admin.attributes.firstName} {admin.attributes.lastName} ({
        admin.attributes.email
      })
    </option>
  ))

  const renderError = errors => {
    if (errors) {
      return (
        <div className="alert alert-danger">
          <ul>
            {errors.map((error, index) => <li key={index}>{error.detail}</li>)}
          </ul>
        </div>
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      {renderError(props.errors)}
      <div className="form-group">
        <label className="col-md-2 control-label">Name</label>
        <div className="col-md-10">
          <Field
            component="input"
            type="text"
            name="name"
            className="form-control"
          />
        </div>
      </div>
      <div className="hr-line-dashed" />
      <div className="form-group">
        <label className="col-md-2 control-label">Owner</label>
        <div className="col-md-10">
          <Field
            component="select"
            type="text"
            name="ownerId"
            className="form-control"
          >
            {props.initialValues ? null : <option />}
            {ownerOptions}
          </Field>
        </div>
      </div>
      <div className="hr-line-dashed" />
      <div className="form-group">
        <div className="col-md-8 col-md-offset-2">
          <Link to="/companies" className="btn btn-white">
            Cancel
          </Link>&nbsp;
          <button
            type="submit"
            className="btn btn-primary"
            disabled={pristine || submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'companyNewForm'
})(companyNewForm)
