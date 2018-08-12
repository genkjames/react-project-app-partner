function subscribe(email) {
  var data = new FormData();
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

}

function login(user) {

}

export {
  subscribe,
  register, 
  login
}