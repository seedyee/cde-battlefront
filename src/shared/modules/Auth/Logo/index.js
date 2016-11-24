import React from 'react'
import { Link } from 'react-router'

import Styles from './index.css'
import logo from '../../assets/leapcorn.jpg'

export default () => (
  <div className={Styles.header}>
    <Link to="/" >
      <img className={Styles.logo} alt="cde logo" src={logo} />
    </Link>
  </div>
)
