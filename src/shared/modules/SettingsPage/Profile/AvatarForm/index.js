import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'

import Styles from './index.css'
import logo from '../../../assets/logo.png'

class AvatarForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
      showModal: false,
    }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', this.state.file)
    fetch('http://localhost:1337/dev/api/upload', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .catch(err => console.error(err))
    this.close()
  }

  handleImageChange(e) {
    e.preventDefault()
    const reader = new FileReader()
    const firstFile = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: firstFile,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(firstFile)
    this.open()
  }

  render() {
    const { imagePreviewUrl } = this.state
    return (
      <form onSubmit={this.handleSubmit} className={Styles.avatar}>
        <p className={Styles.title}>用户头像</p>
        <img
          className={Styles.img}
          alt="your avatar"
          src={logo}
        />
        <a href="" className={Styles.upload} >选择头像
          <input type="file" onChange={this.handleImageChange} />
        </a>
        <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>上传头像</Modal.Title>
          </Modal.Header>
          <Modal.Body className={Styles.modalBody}>
            <img className={Styles.img} src={imagePreviewUrl} alt="your avatar" />
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" className={Styles.fileBtn} type="submit" onClick={this.handleSubmit}>上传</Button>
            <Button bsStyle="default" className={Styles.fileBtn} onClick={this.close}>取消</Button>
          </Modal.Footer>
        </Modal>
      </form>
    )
  }
}

export default AvatarForm

