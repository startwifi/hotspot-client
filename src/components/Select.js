import React from 'react'
import classnames from 'classnames'

const select = props => {
  const {
    input,
    label,
    type,
    options,
    defaultOption,
    meta: { touched, error, invalid, warning }
  } = props

  const divClasses = classnames({
    'form-group': true,
    'has-error': !!(touched & invalid)
  })

  return (
    <div className={divClasses}>
      <label className="col-md-2 control-label">{label}</label>
      <div className="col-md-10">
        <select {...input} type={type} className="form-control">
          {defaultOption ? (
            <option value="" disabled>
              {defaultOption}
            </option>
          ) : null}
          {options}
        </select>
        <div className="help-block">
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    </div>
  )
}

export default select
