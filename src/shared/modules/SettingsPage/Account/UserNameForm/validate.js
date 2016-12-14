const validate = () => values => {
  const errors = {}
  const name = values.name

  if (!name) {
    errors.name = '用户名不为空 !'
  }

  return errors
}

export default validate

