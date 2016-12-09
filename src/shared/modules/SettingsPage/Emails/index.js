import React, { Component } from 'react'
import { connect } from 'react-redux'

import EmailList from './EmailList'
import EmailForm from './EmailForm'
import Styles from './index.css'

class Emails extends Component {
  render() {
    return (
      <div className={Styles.Emails}>
        <h3>邮箱列表</h3>
        {this.props.emails.length === 0 ? <p>请添加一个电子邮件地址用于与帐户相关信息的通知</p> :
          <EmailList
            user={this.props.user}
            emails={this.props.emails}
            deleteEmail={this.props.deleteEmail}
            updateEmail={this.props.updateEmail}
            sendEmail={this.props.sendEmail}
          />
        }
        <EmailForm />
      </div>
    )
  }
}

import { deleteEmailActions, updateEmailActions, sendEmailActions } from '../actions'

export default connect(
  null,
  {
    deleteEmail: deleteEmailActions.request,
    updateEmail: updateEmailActions.request,
    sendEmail: sendEmailActions.request,
  }
)(Emails)
