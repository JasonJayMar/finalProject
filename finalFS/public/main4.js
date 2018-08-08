

document.getElementById('dl').onclick = main4
document.getElementById('something').onclick = flashit
document.getElementById('leafs').onclick = element
document.getElementById('middleRight').onclick = shake
document.getElementById('bottom').onclick = bottom2

//main backgrounds
function main4() {
  document.getElementById('main4').classList.toggle("main2")
}
//top animation
function flashit() {
  document.getElementById('something').classList.toggle("flashit")
  console.log("flash");
}
//middle left animation
function element(){
  document.getElementById('leafs').classList.toggle("element");
  console.log("element");
}
// makes the middleRight shake whden clicking
function shake(){
  document.getElementById('middleRight').classList.toggle("shake");
  console.log("shake");
}

function bottom2(){
  document.getElementById('bottom').classList.toggle("bottom2")
  console.log("gifChange");
}
