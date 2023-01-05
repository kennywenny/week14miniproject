loginEventHandler = async e => {
  e.preventDefault()
  const email = document
    .getElementById('login_email')
    .value
    .trim()
  const password = document
    .getElementById('login_password')
    .value
    .trim()
  const response = await fetch('/api/users/login', {
    method: 'post',
    body: JSON.stringify({ email, password }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  if (response.status !== 200) {
    alert('Could not login')
    return
  }
  document.location.replace('/');
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
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  if (response.status !== 200) {
    alert('Could not create user')
    return
  }
  document.location.replace('/');
}

document
  .getElementById('login_button')
  .addEventListener('click', loginEventHandler)

document
  .getElementById('create_user_button')
  .addEventListener('click', createEventHandler)