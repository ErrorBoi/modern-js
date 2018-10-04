document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getAPIData);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(res=>{
      return res.text();
    })
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(error => {
      console.log(error);
    });
}

// Get local JSON data
function getJSON() {
  fetch('posts.json')
  .then(res=>{
    return res.json();
  })
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => {
    console.log(error);
  });
}

// Get API Data
function getAPIData() {
  fetch('https://api.github.com/users')
  .then(res=>{
    return res.json();
  })
  .then(data => {
    console.log(data);
    let output = '';
    data.forEach(user => {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => {
    console.log(error);
  });
}