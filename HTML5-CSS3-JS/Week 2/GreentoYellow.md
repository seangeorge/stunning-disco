	

	var image = new SimpleImage("duke_blue_devil.png");

	for(var pixel of image.values())
	{if (pixel.getRed() < 200){
        
			pixel.setRed(255);

			pixel.setGreen(255);
        
			pixel.setBlue(0);

	}

	}print(image);

![greentoyellow1](https://user-images.githubusercontent.com/31294255/37410310-54c0253c-276e-11e8-9897-b520d9546d96.png)