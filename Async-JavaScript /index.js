// const getTodos = (resource) => {

//   return new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', () => {
      
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         resolve(data)
//       } else if (request.readyState === 4) {
//         reject('could not fetch data', undefined)
//       }
//     })
    
//     request.open('GET', resource)
//     request.send()
//   })
// }

// getTodos('todos/todos.json').then((data) => {
//   console.log('promise 1 resolved', data);
//   return getTodos('todos/todos1.json')
// }).then(data => {
//   console.log('promise 2 resolved', data);
//   return getTodos('todos/todos2.json')
// }).then(data => {
//   console.log('promise 3 resolved', data);
// }).catch((err) => {
//   console.log('promise resolved', err);
// })


// getTodos('todos/todos.json', (err, data) => {
//   console.log('callback fired');
//   console.log(data);
//   getTodos('todos/todos1.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/todos1.json', (err, data) => {
//       console.log(data);
//     })
//   })
// })

//promise example 
// const getSomething = () => {

//   return new Promise((resolve, reject) => {
    // fetch something
//     resolve('resolve data')
//     reject('error')
//   })
// }

// 1. Getting reject with callback
// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// })

// 2. Getting reject with .catch()
// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })


// Fetch API
// fetch('todos/todos.json').then((response) => {
//   console.log('response', response);
//   return response.json()
// }).then(data => {
//   console.log(data);
// }).catch((err) => {
//   console.log('reject', err);
// })

// async & await 
const getTodos = async () => {
  const response = await fetch('todos/todos12.json')

  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }

  const data = await response.json()

  return data
}

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected', err.message))

