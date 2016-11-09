import React from 'react'
import Styles from './formInputField.css'

export default ({ input, label, labelFor, forgetPassword, id, type, meta: { touched, error, warning } }) => (
  <div className={Styles.field}>
    <div className={Styles.labelContainer}>
      <label htmlFor={labelFor}> {label} </label>
      {forgetPassword ? <span className={Styles.forgetPassword}>{forgetPassword}</span> : null}
    </div>
    <input {...input} id={id} type={type} />
    <div className={Styles.error}>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
