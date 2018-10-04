const http = new EasyHTTP;

// Get users
// http.get('http://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// User data
const data = {
  name: 'Vitaliy Tsal',
  username: 'Papizi',
  email: 'arthas@centralstationspb.com'
}

// Create post
// http.post('http://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update post
// http.put('http://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete post
http.delete('http://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));