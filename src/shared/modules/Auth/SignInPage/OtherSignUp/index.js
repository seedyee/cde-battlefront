import React from 'react'

import Styles from './index.css'
import logo from '../../../assets/github.png'

const otherSignUp = () => (
  <div>
    <p className={Styles.title}>其他方式进行登录</p>
    <ul className={Styles.ul}>
      <li><a href=""><img src={logo} alt="" /></a></li>
    </ul>
  </div>
)

export default otherSignUp
