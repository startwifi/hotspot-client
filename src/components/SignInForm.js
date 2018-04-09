import React from 'react'
import { Field, reduxForm } from 'redux-form'

const signInForm = props => {
  const { handleSubmit, pristine, submitting } = props

  return (
    <form onSubmit={handleSubmit} className="m-t">
      <div className="form-group">
        <Field
          component="input"
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <Field
          component="input"
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
        />
      </div>
      <button
        type="submit"
        disabled={pristine || submitting}
        className="btn btn-primary block full-width m-b"
      >
        Sign in
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'signIn'
})(signInForm)
