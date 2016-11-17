const validate = () => values => {
  const errors = {}
  const username = values.username

  if (!username) {
    errors.username = '用户名不为空 !'
  }

  return errors
}

export default validate

