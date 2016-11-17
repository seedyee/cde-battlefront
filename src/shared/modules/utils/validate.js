const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  // Minimum 8 characters at least 1 Alphabet and 1 Number:
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // 11 numbers that starts with one
  mobile: /^1[0-9]{10}$/,
}

const validate = ({ register } = { register: false }) => values => {
  const errors = {}
  const principal = values.principal
  const email = values.email
  const password = values.password
  const username = values.username
  const realName = values.realName
  const mobile = values.mobile

  if (!principal) {
    errors.principal = '请输入您的用户名或邮箱 !'
  }

  if (!email) {
    errors.email = '请输入您的邮箱 !'
  } else if (!validators.email.test(email)) {
    errors.email = '请输入正确格式的邮箱地址 !'
  }

  if (!password) {
    errors.password = '请输入您的密码 !'
  } else if (!validators.password.test(password)) {
    errors.password = '密码有效长度为8位以上，且至少包括1个字母和1个数字 !'
  }

  if (register && !username) {
    errors.username = '请输入您的用户名 !'
  }

  if (register && !realName) {
    errors.realName = '请输入您的真实姓名 !'
  }

  if (!mobile) {
    errors.mobile = '请输入您的手机号码 !'
  } else if (!validators.mobile.test(mobile)) {
    errors.mobile = '请输入有效11位手机号码 !'
  }

  return errors
}

export default validate

