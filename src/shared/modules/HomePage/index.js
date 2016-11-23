import React from 'react'
import Helmet from 'react-helmet'

import Styles from './Home.css'

const Home = () => (
  <div className={Styles.Home}>
    <Helmet title="Home" />
    <p className={Styles.intro}>
      Produced with ❤️ by <a href="https://github.com/seedyee">seedyee</a>
    </p>
    <hr />
  </div>
)

export default Home
