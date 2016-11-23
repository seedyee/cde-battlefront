const validators = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  mobile: /^1[0-9]{10}$/,
}

const validate = () => values => {
  const errors = {}
  const email = values.email
  const mobile = values.mobile

  if (email && !validators.email.test(email)) {
    errors.email = '请输入正确格式的邮箱地址 !'
  }

  if (mobile && !validators.mobile.test(mobile)) {
    errors.mobile = '请输入有效11位手机号码 !'
  }

  if (!email) {
    errors.email = '默认邮箱不为空 !'
  }

  if (!mobile) {
    errors.mobile = '默认手机号码不为空 !'
  }

  return errors
}

export default validate

