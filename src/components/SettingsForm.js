import React from 'react'
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom'
import Input from 'components/Input'
import Select from 'components/Select'
// import SettingsProviderForm from 'components/SettingsProviderForm'

const settingsForm = props => {
  const { handleSubmit, pristine, submitting, errors, providers } = props

  const displayProviderForms = providerName => {
    const initialValues = providers.providers.find(
      provider => provider.name === providerName
    )

    const actionOptions = providers.eligibleActions[providerName].map(action => (
      <option value={action} key={action}>
        {action}
      </option>
    ))

    return (
      <div key={providerName}>
        <h2>{providerName}</h2>
        <Field
          component={Input}
          type="text"
          name={`${providerName}.name`}
          input={{ defaultValue: providerName }}
        />
        <Field
          component={Input}
          type="text"
          name={`${providerName}.apiKey`}
          label="Api key"
          input={{ value: initialValues ? initialValues.apiKey : undefined }}
        />
        <Field
          component={Input}
          type="text"
          name={`${providerName}.apiSecret`}
          label="Api secret"
          input={{ value: initialValues ? initialValues.apiSecret : undefined }}
        />
        <Field
          component={Select}
          name={`${providerName}.action`}
          label="Action"
          defaultOption="Choose a provider action..."
          options={actionOptions}
        />
        <div className="hr-line-dashed" />
      </div>
    )
  }

  // const 2displayProviderForms = attributes => {
  //   return attributes.availableProviders.map(providerName => (
  //     <SettingsProviderForm
  //       key={providerName}
  //       form={providerName}
  //       providerName={providerName}
  //       actions={attributes.eligibleActions[providerName]}
  //       initialValues={attributes.providers.find(
  //         provider => provider.name === providerName
  //       )}
  //     />
  //   ))
  // }

  return (
    <Form onSubmit={handleSubmit} className="form-horizontal">
      {providers
          ? providers.availableProviders.map(providerName => displayProviderForms(providerName))
          : null}
      <div className="form-group">
        <div className="col-md-8 col-md-offset-2">
          <Link to="/companies" className="btn btn-white">
            Cancel
          </Link>&nbsp;
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </Form>
  )
}

export default settingsForm
