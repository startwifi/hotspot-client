import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import Input from 'components/Input'
import Select from 'components/Select'

const validate = values => {
  const errors = {}

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Enter a company name'
  }
  if (!values.ownerId || values.ownerId.trim() === '') {
    errors.ownerId = 'Choose a company owner'
  }

  return errors
}

const companyForm = props => {
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
      <Field component={Input} type="text" name="name" label="Name" />
      <div className="hr-line-dashed" />
      <Field
        component={Select}
        name="ownerId"
        label="Owner"
        defaultOption="Choose a company owner..."
        options={ownerOptions}
      />
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
  form: 'companyForm',
  validate
})(companyForm)
