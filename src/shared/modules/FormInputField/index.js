import React from 'react'
import Styles from './index.css'
import { Glyphicon } from 'react-bootstrap'

const alertMessage = (error) => (
  <div className={Styles.alertMessage}>
    <Glyphicon glyph="alert" className={Styles.alertIcon} />
    <span>{error}</span>
  </div>
)

export default ({ styles = {}, textarea, type, id, labelFor, label, forgetPassword, input, meta: { touched, error, warning } }) => (
  <div className={Styles.field}>
    <div className={Styles.labelContainer}>
      <label htmlFor={labelFor}> {label} </label>
      {forgetPassword ? <span className={Styles.forgetPassword}>{forgetPassword}</span> : null}
    </div>
    {textarea ? <textarea className={styles.input} {...input} id={id} /> : <input className={styles.input} {...input} id={id} type={type} />}
    <div className={Styles.error}>
      {touched && ((error && alertMessage(error)) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
