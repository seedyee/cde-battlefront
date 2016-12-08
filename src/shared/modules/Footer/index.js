import React from 'react'

import Styles from './index.css'

const Footer = () => (
  <div className={Styles.Footer}>
    <div className={Styles.top}>
      <div className={Styles.topContent}>
        <ul>
          <li>产品</li>
          <li><a href="">代码托管</a></li>
          <li><a href="">项目管理</a></li>
          <li><a href="">WebIDE</a></li>
          <li><a href="">APP下载</a></li>
          <li><a href="">更新日志</a></li>
        </ul>
        <ul>
          <li>公司</li>
          <li><a href="">关于CDE</a></li>
          <li><a href="">加入我们</a></li>
          <li><a href="">CDE 活动</a></li>
          <li><a href="">合作伙伴</a></li>
          <li><a href="">Shop</a></li>
        </ul>
        <ul>
          <li>支持</li>
          <li><a href="">帮助</a></li>
          <li><a href="">在线反馈</a></li>
          <li><a href="">API</a></li>
          <li><a href="">博客</a></li>
        </ul>
        <ul>
          <li>联系我们</li>
          <li><a href="">111-111-1111</a></li>
          <li><a href="">xxx@leapcorn.com</a></li>
          <li><a href="">深圳 | 北京 | 上海 | 厦门 | 杭州</a></li>
        </ul>
      </div>
    </div>
    <div className={Styles.bottom}>
      <div className={Styles.bottomContent}>
        <div className={Styles.left}>
          <h2>习得易</h2>
        </div>
        <div className={Styles.right}>
          <span><a href="">隐私策略</a> | <a href="">服务条款</a> | <a href="">安全策略</a></span>
          <p>Copyright © 2016 leapcorn.net 粤ICP备11111111号-1</p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
