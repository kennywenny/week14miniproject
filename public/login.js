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
  const password = document
    .getElementById('create_user_password')
    .value
    .trim()
  const response = fetch('/api/login', {
    method: 'post',
    body: JSON.stringify({ username, password })
  })
  /*
fetch("http://example.com/api/endpoint/", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: myName,
    password: myPassword
  })
})
*/
  console.log('USERNAME: ' + username)
  console.log('PASSWORD: ' + password)
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)

document
  .getElementById('create_user_button')
  .addEventListener('click', createEventHandler)