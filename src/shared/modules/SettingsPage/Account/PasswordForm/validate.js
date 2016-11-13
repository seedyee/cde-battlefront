const validators = {
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

const validate = ({ register } = { register: false }) => values => {
  const errors = {}
  const password = values.password
  const newPassword = values.newPassword
  const newPasswordConfirm = values.newPasswordConfirm

  if (!password) {
    errors.password = 'Required'
  } else if (!validators.password.test(password)) {
    errors.password = 'Minimum 8 characters at least 1 Alphabet and 1 Number'
  }


  return errors
}

export default validate

