logoutEventHandler = async e => {
  e.preventDefault()
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  if (response.ok) {
    alert('Could not log out')
  }
  console.log('Logged out')
}

document
  .getElementById('logout_button')
  .addEventListener('click', logoutEventHandler)
