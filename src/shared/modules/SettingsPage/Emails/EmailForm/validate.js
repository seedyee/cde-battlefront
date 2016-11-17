const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
}

const validate = () => values => {
  const errors = {}
  const email = values.email

  if (email && !validators.email.test(email)) {
    errors.email = '不是有效邮箱 !'
  }

  return errors
}

export default validate

