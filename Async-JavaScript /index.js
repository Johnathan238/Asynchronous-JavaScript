const getTodos = (resource, callback) => {

  const request = new XMLHttpRequest()
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined)
    }
  })

  request.open('GET', resource)
  request.send()
}

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
const getSomething = () => {

  return new Promise((resolve, reject) => {
    // fetch something
    // resolve('resolve data')
    reject('error')
  })
}

// 1. Getting reject with callback
// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// })

// 2. Getting reject with .catch()