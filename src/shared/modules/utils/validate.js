const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  // Minimum 8 characters at least 1 Alphabet and 1 Number:
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // 11 numbers that starts with one
  mobile: /^1[0-9]{10}$/,
}

const validate = () => values => {
  const errors = {}
  const principal = values.principal
  const email = values.email
  const password = values.password
  const username = values.username

  if (!principal && password) {
    errors.principal = '请输入您的用户名或邮箱 !'
  }

  if (principal && !password) {
    errors.password = '请输入你的密码 !'
  }

  if (password && !validators.password.test(password)) {
    errors.password = '密码有效长度为8位以上，且至少包含1个字母和1个数字 !'
  }

  if (email && !validators.email.test(email)) {
    errors.email = '请输入正确格式的邮箱地址 !'
  }

  if (email && !username) {
    errors.username = '请输入您的用户名 !'
  }

  if (username && !password) {
    errors.password = '请输入您的密码 !'
  }

  if (password && !email) {
    errors.email = '请输入您的邮箱 !'
  }

  return errors
}

export default validate

