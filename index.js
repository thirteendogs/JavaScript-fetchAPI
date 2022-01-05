const API_URL = 'https://jsonplaceholder.typicode.com'

fetch('https://jsonplaceholder.typicode.com/users/1')
	.then((response) => response.json())
	.then((user) => console.log(typeof user.name))

// const HTMLResponse = document.querySelector('#app')
// const ul = document.createElement('ul')

// fetch(`${API_URL}/users`)
// 	.then((response) => response.json())
// 	.then((users) => {
// 		users.forEach((user) => {
// 			let li = document.createElement('li')
// 			li.appendChild(document.createTextNode(`${user.name} 📧 ${user.email}`))
// 			ul.appendChild(li)
// 		})
// 		HTMLResponse.appendChild(ul)
// 	})

// const xhr = new XMLHttpRequest()

// function onRequestHandler() {
//    if(this.readyState === 4 && this.status === 200){
//       // 0 = UNSET, no se ha llamado al metodo open.
//       // 1 = OPENED, se ha llamado al metodo open.
//       // 2 = HEADER_RECEIVED, se está llamando al metodo send().
//       // 3 = LOADING, está cargando, es decir, está recibiendo la respuesta.
//       // 4 = DONE, se ha completado la operación

//       const data = JSON.parse(this.response)
//       const HTMLResponse = document.querySelector('#app')

//       const listaDatos = data.map((user) => `<li>${user.name} 📧 ${user.email}</li>`)
//       HTMLResponse.innerHTML = `<ul>${listaDatos}</ul>`
//    }
// }

// xhr.addEventListener('load', onRequestHandler)
// xhr.open('GET', `${API_URL}/users`)
// xhr.send()
