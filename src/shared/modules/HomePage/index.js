import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import Styles from './Home.css'

export function Home() {
  return (
    <div className={Styles.Home}>
      <Helmet title="Home" />
      <p className={Styles.intro}>
        Produced with ❤️ by <a href="https://github.com/seedyee">seedyee</a>
      </p>
      <hr />
    </div>
  )
}

/* const mapStateToProps = (state) => ({
 * })*/
export default connect()(Home)
