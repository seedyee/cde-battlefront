const validators = {
  password: /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,24}$/,
}

const validate = () => values => {
  const errors = {}
  const password = values.password
  const password1 = values.password1
  const password2 = values.password2

  if (password && !validators.password.test(password)) {
    errors.password = '密码有效长度为6-24位，且数字、字母、字符至少包含两种 !'
  }

  if (password1 && !validators.password.test(password1)) {
    errors.newPassword = '密码有效长度为6-24位，且数字、字母、字符至少包含两种 !'
  }

  if (password1 !== password2) {
    errors.password2 = '密码不一致 !'
  }

  if (password && !password1) {
    errors.newPassword = '请填写新密码 !'
  }

  if (password1 && password2 && !password) {
    errors.password = '请填写原密码 !'
  }

  return errors
}

export default validate

