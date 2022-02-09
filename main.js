// console.log("I am on")

const url = 'https://api.github.com/users/Tedfulk'
let text = 'tedfulk'
let result = text.link("https://github.com/Tedfulk");

// fetch(url)
// .then(function (response) {
//  return response.json()
// })
// .then(function (data) {
//  console.log(data)
//  document.querySelector("#username").innerHTML = `<h2>${data.name}</h2>`
// })

fetch('https://api.github.com/users/Tedfulk')
.then(response => response.json())
// orrrrrr .then(res => res.json())
.then(data => {
 document.querySelector("#username").innerHTML = 
 `<div id="top">
 <img id="pic" src=${data.avatar_url}> 
 <h2 id="name">${data.name}</h2> <br>
 </div>
 <div id="info">Location: ${data.location} <br>
 GitHub URL: <a> ${result} </a> <br>
 GitHub username: ${data.name}
 </div>
 <h2>GitHub Repos</h2>`
 return data.repos_url
})
.then((reposUrl) => fetch(reposUrl))
.then((res) => res.json())
.then((data) => {
console.log(data)
for (let repo of data) {
      document.querySelector('#org-data').innerHTML += 
      `<p><a href=${repo.html_url}>${repo.name}</a></p>`
      }
     })

