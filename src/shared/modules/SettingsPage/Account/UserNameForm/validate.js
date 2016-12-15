const validators = {
  // 3 to 16 characters starts with alphabet include alphabet or numbers
  name: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/,
}

const validate = () => values => {
  const errors = {}
  const name = values.name

  if (!name) {
    errors.name = '用户名不为空 !'
  } else if (!validators.name.test(name)) {
    errors.name = '用户名有效格式为3-16位，由字母或数字组成，开头必须为字母 !'
  }

  return errors
}

export default validate

