const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  // 8 to 24 characters include at least two types that alphabet, numbers and symbols
  password: /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,24}$/,
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
    errors.password = '密码有效长度为6-24位，且数字、字母、字符至少包含两种 !'
  }

  if (email && !validators.email.test(email)) {
    errors.email = '请输入正确格式的邮箱地址 !'
  }

  if (password && !username) {
    errors.username = '请输入您的用户名 !'
  }

  if (username && !email) {
    errors.email = '请输入您的邮箱 !'
  }

  if (email && !password) {
    errors.password = '请输入您的密码 !'
  }

  return errors
}

export default validate

