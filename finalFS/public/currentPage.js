
fetch('currentPage', {
  method: 'put',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'currentPage': window.location.pathname
  })
}).then(function (response) {
  console.log(response);
})
