const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  // Minimum 8 characters at least 1 Alphabet and 1 Number:
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // 11 numbers that starts with one
  mobile: /^1[0-9]{10}$/,
}

const validate = ({ register } = { register: false }) => values => {
  const errors = {}
  const email = values.email
  const password = values.password
  const username = values.username
  const realName = values.realName
  const mobile = values.mobile

  if (!email) {
    errors.email = '必填 !'
  } else if (!validators.email.test(email)) {
    errors.email = '不是有效邮箱 ！'
  }

  if (!password) {
    errors.password = '必填 !'
  } else if (!validators.password.test(password)) {
    errors.password = '最少8个字符且至少包括1个字母和1个数字 !'
  }

  if (register && !username) {
    errors.username = '必填 !'
  }

  if (register && !realName) {
    errors.realName = '必填 !'
  }

  if (!mobile) {
    errors.mobile = '必填 !'
  } else if (!validators.mobile.test(mobile)) {
    errors.mobile = '不是有效手机 !'
  }

  return errors
}

export default validate

