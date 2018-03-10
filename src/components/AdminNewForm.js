import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

const adminNewForm = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group">
        <label className="col-md-2 control-label">First name</label>
        <div className="col-md-10">
          <Field
            component="input"
            type="text"
            name="first_name"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label">Last name</label>
        <div className="col-md-10">
          <Field
            component="input"
            type="text"
            name="last_name"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label">Email</label>
        <div className="col-md-10">
          <Field
            component="input"
            type="email"
            name="email"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-2 control-label">Password</label>
        <div className="col-md-10">
          <Field
            component="input"
            type="password"
            name="password"
            className="form-control"
          />
        </div>
      </div>
      <div className="hr-line-dashed" />
      <div className="form-group">
        <div className="col-md-8 col-md-offset-2">
          <Link to="/admins" className="btn btn-white">Cancel</Link>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'adminNewForm'
})(adminNewForm)
