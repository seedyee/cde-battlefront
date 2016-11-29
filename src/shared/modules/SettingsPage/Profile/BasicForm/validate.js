const validators = {
  mobile: /^1[0-9]{10}$/,
}

const validate = () => values => {
  const errors = {}
  const mobile = values.mobile

  if (mobile && !validators.mobile.test(mobile)) {
    errors.mobile = '请输入有效11位手机号码 !'
  }

  return errors
}

export default validate

