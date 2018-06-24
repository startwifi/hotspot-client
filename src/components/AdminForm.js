import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Input from 'components/Input'

const validate = values => {
  const errors = {}

  if (!values.firstName || values.firstName.trim() === '') {
    errors.firstName = 'Enter a first name'
  }
  if (!values.lastName || values.lastName.trim() === '') {
    errors.lastName = 'Enter a last name'
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter an email'
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter an admin password'
  }

  return errors
}

const adminForm = props => {
  const { handleSubmit, pristine, submitting, errors } = props

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
      {renderError(errors)}
      <Field
        component={Input}
        type="text"
        name="firstName"
        label="First name"
      />
      <Field component={Input} type="text" name="lastName" label="Last name" />
      <Field component={Input} type="email" name="email" label="Email" />
      <Field
        component={Input}
        type="password"
        name="password"
        label="Password"
      />
      <div className="hr-line-dashed" />
      <div className="form-group">
        <div className="col-md-8 col-md-offset-2">
          <Link to="/admins" className="btn btn-white">
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
  form: 'adminForm',
  validate
})(adminForm)
