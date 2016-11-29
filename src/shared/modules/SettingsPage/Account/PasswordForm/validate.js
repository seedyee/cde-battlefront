const validators = {
  password: /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,24}$/,
}

const validate = () => values => {
  const errors = {}
  const password = values.password
  const newPassword = values.newPassword
  const newPasswordConfirm = values.newPasswordConfirm

  if (password && !validators.password.test(password)) {
    errors.password = '密码有效长度为6-24位，且数字、字母、字符至少包含两种 !'
  }

  if (newPassword && !validators.password.test(newPassword)) {
    errors.newPassword = '密码有效长度为6-24位，且数字、字母、字符至少包含两种 !'
  }

  if (newPassword !== newPasswordConfirm) {
    errors.newPasswordConfirm = '密码不一致 !'
  }

  if (password && !newPassword) {
    errors.newPassword = '请填写新密码 !'
  }

  if (newPassword && newPasswordConfirm && !password) {
    errors.password = '请填写原密码 !'
  }

  return errors
}

export default validate

