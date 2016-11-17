const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
}

const validate = () => values => {
  const errors = {}
  const email = values.email

  if (email && !validators.email.test(email)) {
    errors.email = '请输入正确格式的邮箱地址 !'
  }

  return errors
}

export default validate

