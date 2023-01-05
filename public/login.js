loginEventHandler = async e => {
  e.preventDefault()
  console.log('LOGIN!')
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)