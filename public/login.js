loginEventHandler = async e => {
  e.preventDefault()
  console.log('LOGIN!')
}

createEventHandler = async e => {
  e.preventDefault()
  console.log('CREATE!')
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)

document
  .getElementById('create_user_button')
  .addEventListener('click', createEventHandler)