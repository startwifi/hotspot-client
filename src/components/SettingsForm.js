import React from 'react'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import SettingsProviderForm from 'components/SettingsProviderForm'

const settingsForm = props => {
  const { handleSubmit, pristine, submitting, errors, providers } = props

  const displayProviderForms = attributes => {
    return attributes.availableProviders.map(providerName => (
      <SettingsProviderForm
        key={providerName}
        providerName={providerName}
        actions={attributes.eligibleActions[providerName]}
        initialValues={attributes.providers.find(
          provider => provider.name === providerName
        )}
      />
    ))
  }

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      {providers ? displayProviderForms(providers) : null}
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
  form: 'settingsForm'
})(settingsForm)
