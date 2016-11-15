import React from 'react'
import Styles from './index.css'

export default ({ styles = {}, textarea, input, label, labelFor, forgetPassword, id, type, meta: { touched, error, warning } }) => (
  <div className={Styles.field}>
    <div className={Styles.labelContainer}>
      <label htmlFor={labelFor}> {label} </label>
      {forgetPassword ? <span className={Styles.forgetPassword}>{forgetPassword}</span> : null}
    </div>
    {textarea ? <textarea className={styles.input} {...input} id={id} type={type} /> : <input className={styles.input} {...input} id={id} type={type} />}
    <div className={Styles.error}>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
