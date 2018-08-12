function subscribe(email) {
  const data = new FormData();
  for (let i in email) {
    data.append(i, email[i])
  }

  const options = {
    method: 'POST',
    body: data
  }

  return fetch('http://dev3.apppartner.com/Reactors/scripts/add-email.php', options)
  .then(resp => resp.json());
}

function register(user) {
  console.log('register');
  console.log(user);
  const data = new FormData();

  for (let i in user) {
    data.append(i, user[i])
  }

  const options = {
    method: 'POST',
    body: data
  }

  return fetch('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', options)
  .then(resp => resp.json());
}

function login(user) {
  console.log('login')
  console.log(user);
}

export default {
  subscribe,
  register, 
  login
}