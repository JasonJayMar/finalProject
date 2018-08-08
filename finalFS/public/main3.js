

document.getElementById('dl').onclick = main3


//main backgrounds
function main3() {
  document.getElementById('main3').classList.toggle("main2")
}

//middleLeft animaiton
$(function(){
  var x = 0;
  setInterval(function(){
    x+=1;
    $('#leafs').css('background-position', x + 'px 0');
  }, 10);
})

$(function(){
  var x = 0;
  setInterval(function(){
    x-=1;
    $('#backImg').css('background-position', x + 'px 0');
  }, 30);
})
