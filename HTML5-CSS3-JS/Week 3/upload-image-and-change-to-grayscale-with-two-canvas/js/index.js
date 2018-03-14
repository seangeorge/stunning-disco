//Add another canvas to the right of the existing one.

//2. In the JS panel, declare two global variables, one for the original image, and one for the grayscale image.

//3. Modify the function upload(). When we upload our image file, we want to use it to create two new SimpleImages, one that gets drawn to our canvas on the left and another that we will eventually make gray scale. So:

//Have upload() assign a SimpleImage of the uploaded image file to both of the global variables.
//Also have upload() draw the original image global variable’s Simple Image to the left hand side canvas.
//4. Modify the function makeGray() so that it modifies the grayscale image global variable to grayscale and then displays the modified image in the right hand side canvas.

var image;
//var imagegray;

function upload(){
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  //imagegray = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}

function makegray(){
  for (var pixel of image.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById("d2");
  image.drawTo(imgcanvas);
}