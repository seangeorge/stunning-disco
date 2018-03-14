var originalImage = null;
var grayImage = null;
var redImage = null;
var rainImage = null;
var canvas = document.getElementById("d1");

function upload(){
  var fileinput = document.getElementById("finput");
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  redImage = new SimpleImage(fileinput);
  rainImage = new SimpleImage(fileinput); 
  originalImage.drawTo(canvas);
}

function doGray() {
  if ( imageIsLoaded(grayImage) ) {     // check if image is loaded
    makeGray();	                      // function performs the grayscale work
    grayImage.drawTo(canvas);	          // display image
  }
}

function makeGray() {
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed() {
  if ( imageIsLoaded(redImage) ) {     // check if image is loaded
    makeRed();	                      // function performs the grayscale work
    redImage.drawTo(canvas);	          // display image
  }
}

function makeRed(){
  for(var pixel of redImage.values()){
    var avg1 = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if(avg1 < 128){
      pixel.setRed(2 * avg1);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else
      {
        pixel.setRed(255);
        pixel.setGreen(2 * avg1 - 255);
        pixel.setBlue(2 * avg1 - 255);
      }
  }
}

function doRainbow() {
  if ( imageIsLoaded(rainImage) ) {     // check if image is loaded
    makeRainbow();	                      // function performs the grayscale work
    rainImage.drawTo(canvas);	          // display image
  }
}

function makeRainbow()
{
  for(var pixel of rainImage.values()){
    var avg2 = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if(pixel.getY() < rainImage.getHeight()/7){
    if(avg2 < 128){
        pixel.setRed(2 * avg2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2 * avg2 - 255);
        pixel.setBlue(2 * avg2 - 255);
      }
    }   
   else if(pixel.getY() < 2*rainImage.getHeight()/7){
      if (avg2 < 128) {
        pixel.setRed(2 * avg2);
        pixel.setGreen(0.8*avg2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg2-51);
        pixel.setBlue(2 * avg2 - 255);
      }
    }
   else if(pixel.getY() < 3 * rainImage.getHeight()/7){
     if (avg2 < 128) {
        pixel.setRed(2 * avg2);
        pixel.setGreen(2*avg2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg2 - 255);
      }
   }
else if(pixel.getY() < 4 * rainImage.getHeight()/7){
  if (avg2 < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2*avg2 - 255);
        pixel.setGreen(255);
        pixel.setBlue(2 * avg2 - 255);
      }
}
else if(pixel.getY() < 5 * rainImage.getHeight()/7){
        if (avg2 < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg2);
      } else {
        pixel.setRed(2*avg2-255);
        pixel.setGreen(2 * avg2 - 255);
        pixel.setBlue(255);
      }
        }
    else if(pixel.getY() < 6 * rainImage.getHeight()/7){
            if (avg2 < 128) {
        pixel.setRed(.8*avg2);
        pixel.setGreen(0);
        pixel.setBlue(2*avg2);
      } else {
        pixel.setRed(1.2*avg2-51);
        pixel.setGreen(2 * avg2 - 255);
        pixel.setBlue(255);
      }
            }
    else{
      if (avg2 < 128) {
        pixel.setRed(1.6*avg2);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg2);
      } else {
        pixel.setRed(0.4*avg2+153);
        pixel.setGreen(2 * avg2 - 255);
        pixel.setBlue(0.4*avg2+153);
      }
    }
  }
}

function reset() {
  if (imageIsLoaded(originalImage)) {
    originalImage.drawTo(canvas);
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    rainImage = new SimpleImage(originalImage);
  }
}

function imageIsLoaded(img) {
  if (img == null || !img.complete()) {
    alert("Image not loaded");
    return false;
  } else {
    return true;
  }
}