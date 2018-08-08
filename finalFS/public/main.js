
document.getElementById('middleRight').onclick = shake
document.getElementById('something').onclick = element
document.getElementById('leafs').onclick = movement
document.getElementById('backImg').onclick = flashit
document.getElementById('dl').onclick = main2


//main backgrounds
function main2() {
  document.getElementById('main').classList.toggle("main2")
}

// Leafs move from right to left in the top of the comic
function movement(){
  document.getElementById('leafs').classList.add("movement");
  console.log("leftToRight");
}

// makes background fade away from red in the middleLeft box when clicking
function element(){
  document.getElementById('something').classList.add("element");
  console.log("element");
}

// makes the middleRight shake whden clicking
function shake(){
  document.getElementById('middleRight').classList.add("shake");
  console.log("shake");
}

function flashit() {
  document.getElementById('backImg').classList.add("flashit")
  console.log("flash");
}
