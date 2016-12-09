import React, { Component } from 'react'
import { connect } from 'react-redux'

import MobileList from './MobileList'
import MobileForm from './MobileForm'
import Styles from './index.css'

class Mobiles extends Component {
  render() {
    return (
      <div className={Styles.Mobiles}>
        <h3>手机列表</h3>
        {this.props.mobiles.length === 0 ? <p>可添加手机号码以接收账户信息相关的重要通知</p> :
          <MobileList
            user={this.props.user}
            mobiles={this.props.mobiles}
            deleteMobile={this.props.deleteMobile}
            updateMobile={this.props.updateMobile}
            sendMobile={this.props.sendMobile}
          />
        }
        <MobileForm />
      </div>
    )
  }
}

import { deleteMobileActions, updateMobileActions, sendMobileActions } from '../actions'

export default connect(
  null,
  {
    deleteMobile: deleteMobileActions.request,
    updateMobile: updateMobileActions.request,
    sendMobile: sendMobileActions.request,
  }
)(Mobiles)

