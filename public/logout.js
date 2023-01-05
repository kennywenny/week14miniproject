logoutEventHandler = async e => {
  e.preventDefault()
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  if (response.status !== 204) {
    alert('Could not log out')
  }
  document.location.replace('/');
}

document
  .getElementById('logout_button')
  .addEventListener('click', logoutEventHandler)
