import React from 'react'
import classnames from 'classnames'

const input = props => {
  const {
    input,
    label,
    type,
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
        <input {...input} type={type} className="form-control" />
        <div className="help-block">
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
        </div>
      </div>
    </div>
  )
}
        // {props.initialValues ? null : <option />}

export default input
