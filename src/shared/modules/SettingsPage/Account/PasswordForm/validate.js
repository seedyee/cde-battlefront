const validators = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  newPassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

const validate = () => values => {
  const errors = {}
  const password = values.password
  const newPassword = values.newPassword
  const newPasswordConfirm = values.newPasswordConfirm

  if (password && !validators.password.test(password)) {
    errors.password = '最少8个字符且至少包括1个字母和1个数字 !'
  }

  if (newPassword && !validators.newPassword.test(newPassword)) {
    errors.newPassword = '最少8个字符且至少包括1个字母和1个数字 !'
  }

  if (newPassword !== newPasswordConfirm) {
    errors.newPasswordConfirm = '密码不一致 !'
  }

  return errors
}

export default validate

