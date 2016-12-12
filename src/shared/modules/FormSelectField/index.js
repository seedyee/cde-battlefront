import React from 'react'
import Styles from './index.css'
import { Glyphicon } from 'react-bootstrap'

const alertMessage = (error) => (
  <div className={Styles.alertMessage}>
    <Glyphicon glyph="alert" className={Styles.alertIcon} />
    <span>{error}</span>
  </div>
)

export default ({ styles = {}, labelFor, label, id, options, input, meta: { touched, error } }) => (
  <div className={Styles.field}>
    <div className={Styles.labelContainer}>
      <label htmlFor={labelFor}> {label} </label>
    </div>
    <select className={styles.input} {...input} id={id}>
      {options.map(option => <option value={option} key={option}>{option}</option>)}
    </select>
    <div className={Styles.error}>
      {touched && error && alertMessage(error)}
    </div>
  </div>
)
