import React from 'react'
import Helmet from 'react-helmet'

import Styles from './Home.css'

const Home = () => (
  <div className={Styles.Home}>
    <Helmet title="Home" />
    <p className={Styles.intro}>
      Produced with ❤️ by <a href="https://github.com/seedyee">seedyee</a>
    </p>
    <div className={Styles.footer}>
      <ul>
        <li><a href="">Copyright  © 2016 leapcorn.com</a></li>
        <li><a href="">返回首页</a></li>
        <li><a href="">关于CDE</a></li>
        <li><a href="">招贤纳士</a></li>
        <li><a href="">服务条款</a></li>
        <li><a href="">隐私策略</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">App</a></li>
        <li><a href="">Shop</a></li>
      </ul>
    </div>
  </div>
)

export default Home
