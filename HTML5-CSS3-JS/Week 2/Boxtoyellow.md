# Box To Yellow

var image = new SimpleImage(200,200);
for(var pixel of image.values()){
    var red = pixel.setRed(255);
    var green = pixel.setGreen(255);
    var blue = pixel.setBlue(0);
}
print(image);


