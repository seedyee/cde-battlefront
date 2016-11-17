const validators = {
  // 11 numbers that starts with one
  mobile: /^1[0-9]{10}$/,
}

const validate = () => values => {
  const errors = {}
  const mobile = values.mobile

  if (mobile && !validators.mobile.test(mobile)) {
    errors.mobile = '不是有效手机 !'
  }

  return errors
}

export default validate

