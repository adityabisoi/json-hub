var app = document.getElementById('app');
console.log("hello"); 
var customNodeCreator = function(character) {
  return document.createTextNode(character);
}
 
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});
 
typewriter
  .typeString('REST FETCH')
  .pauseFor(2000)
  .start();


function toggle(idx){
  console.log("button clicked",$("#btn"+idx).html());
  
  ($("#btn"+idx).html()==="READ MORE") ? $("#btn"+idx).html("READ LESS") : $("#btn"+idx).html("READ MORE"); 
  $("#"+idx).toggle(1000);
  
  
}


 
 