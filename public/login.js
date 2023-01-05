loginEventHandler = async e => {
  e.preventDefault()
  console.log('LOGIN!')
}

createEventHandler = async e => {
  e.preventDefault()
  // TODO: Check that passwords match
  const username = document
    .getElementById('create_user_username')
    .value
    .trim()
  console.log('USERNAME: ' + username)
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)

document
  .getElementById('create_user_button')
  .addEventListener('click', createEventHandler)