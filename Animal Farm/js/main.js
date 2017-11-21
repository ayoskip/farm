var object = document.getElementById('pig');
pig.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  pig.style.top = x + 'px';
  pig.style.left = y + 'px';
  $("audio")[2].play();
  console.log("pig")
};

var object = document.getElementById('horses');
horses.onclick=function(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  horses.style.top = x + 'px';
  horses.style.left = y + 'px';
  $("audio")[0].play();
  console.log("horse")

};

var object = document.getElementById('duck');
duck.onclick=function(){
 var x = Math.floor(Math.random()*300);
 var y = Math.floor(Math.random()*300);
 duck.style.top = x + 'px';
 duck.style.left = y + 'px';
 $("audio")[3].play();
 console.log("duck")
};

var object = document.getElementById('goat');
goat.onclick=function(){
 var x = Math.floor(Math.random()*300);
 var y = Math.floor(Math.random()*300);
 goat.style.top = x + 'px';
 goat.style.left = y + 'px';
 $("audio")[1].play();
 console.log("goat")
};
