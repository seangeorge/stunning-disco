//Create a variable that gets the value of the text from the text input element
function upload(){
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}