// write your code here
var image = new SimpleImage("hilton.jpg");
for(var pixel of image.values()){
    //If the pixel’s x-coordinate is less than one-third of the image’s width, set the pixel’s red value to 255.
    if(pixel.getX() < image.getWidth()/3){
        pixel.setRed(255);
    }
    //If the pixel’s x-coordinate is between one-third and two-thirds of the image’s width, set the pixel’s green value to 255.
    else if(pixel.getX() >= image.getWidth()/3 && pixel.getX() <= 2*image.getWidth()/3)
    {
            pixel.setGreen(255);
    }
    //If the pixel’s x-coordinate is more than two-thirds of the image’s width, set the pixel’s blue value to 255
    else if(pixel.getX() > 2*image.getWidth()/3)
    {
            pixel.setBlue(255);
    }
}
print(image);