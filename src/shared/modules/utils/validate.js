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
  const mobile = values.mobile

  if (!email) {
    errors.email = 'Required'
  } else if (!validators.email.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (!password) {
    errors.password = 'Required'
  } else if (!validators.password.test(password)) {
    errors.password = 'Minimum 8 characters at least 1 Alphabet and 1 Number'
  }

  if (register && !username) {
    errors.username = 'Required'
  }

  if (!mobile) {
    errors.mobile = 'Required'
  } else if (!validators.mobile.test(mobile)) {
    errors.mobile = 'Invalid mobile!  The valid number include 11 numbers that starts with one'
  }
  return errors
}

export default validate

