loginEventHandler = async e => {
  e.preventDefault()
  console.log('LOGIN!')
}

createEventHandler = async e => {
  e.preventDefault()
  // TODO: Check that passwords match
  const name = document
    .getElementById('create_user_name')
    .value.trim()
  const email = document
    .getElementById('create_user_email')
    .value
    .trim()
  const password = document
    .getElementById('create_user_password')
    .value
    .trim()
  const response = await fetch('/api/users', {
    method: 'post',
    body: JSON.stringify({ name, email, password })
  })
  console.log(response)
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)

document
  .getElementById('create_user_button')
  .addEventListener('click', createEventHandler)