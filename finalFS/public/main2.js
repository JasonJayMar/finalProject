// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
// var trash = document.getElementsByClassName("fa-trash");

document.getElementById('top').onclick = shake
document.getElementById("middleLeft").onclick = something
document.getElementById('something').onclick = element
document.getElementById('dl').onclick = main2
document.getElementById('changingColor').onclick = changingColor

//main backgrounds
function main2() {
  document.getElementById('main').classList.toggle("main2")
}
// makes the middleRight shake whden clicking
function shake(){
  document.getElementById('top').classList.add("shake");
  console.log("shake");
}

// makes background fade away from red in the middleLeft box when clicking
function element(){
  document.getElementById('something').classList.add("element");
  console.log("element");
}

function something(){
  document.getElementById('middleLeft').classList.add("something");
  console.log("change");
}

function changingColor() {
  document.getElementById('middleRight').classList.add("changingColor");
  console.log("dlakd");
}


//
//
//
// //----------comment section-----------\\
// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
//         fetch('messagesDown', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbDown':thumbDown
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload(true)
//         })
//       });
// });
