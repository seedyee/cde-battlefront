import React from 'react'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'

import Styles from './index.css'

export default ({ title }) => (
  <div className={Styles.header}>
    <Link to="/" >
      <img className={Styles.logo} alt="cde logo" src={logo} />
    </Link>
    <h3>{title}</h3>
  </div>
)
