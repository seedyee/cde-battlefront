import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import Styles from './index.css'

class AvatarForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', this.state.file);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  handleImageChange(e) {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { imagePreviewUrl } = this.state
    const imagePreview = (<img className={Styles.img} src={imagePreviewUrl} alt="" />)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <a href="javascript:;" className={Styles.file}>选择头像
            <input type="file" onChange={this.handleImageChange} />
          </a>
          <Button bsStyle="primary" className={Styles.fileBtn} type="submit" onClick={this.handleSubmit}>上传头像</Button>
        </form>
        { imagePreview }
      </div>
    )
  }
}

export default AvatarForm

