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