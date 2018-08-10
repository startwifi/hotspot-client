import React from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from 'components/Input'
import Select from 'components/Select'

const settingsProviderForm = props => {
  const { providerName, actions, initialValues } = props
  console.log(providerName + ': ' + initialValues)

  const actionOptions = actions.map(action => (
    <option value={action} key={action}>
      {action}
    </option>
  ))

  return (
    <div>
      <h2>{providerName}</h2>
      <Field
        component={Input}
        type="text"
        name="name"
        label="Name"
        input={{ defaultValue: providerName }}
      />
      <Field
        component={Input}
        type="text"
        name="apiKey"
        label="Api key"
        input={{ value: initialValues ? initialValues.apiKey : undefined }}
      />
      <Field
        component={Input}
        type="text"
        name="apiSecret"
        label="Api secret"
        input={{ value: initialValues ? initialValues.apiSecret : undefined }}
      />
      <Field
        component={Select}
        name="action"
        label="Action"
        defaultOption="Choose a provider action..."
        options={actionOptions}
      />
      <div className="hr-line-dashed" />
    </div>
  )
}

export default reduxForm({
  form: 'settingsProviderForm'
})(settingsProviderForm)
