



	var image1 = new SimpleImage(200,200);

	for (var pixel of image1.values()) 
	{var x = pixel.getX();
    
	var y = pixel.getY();
    
	if (x<100 & y<100)
        
	pixel.setRed(255);
    
	else if (x>=100 & y<100)
        
	pixel.setGreen(255);
    
	else if (x<100 & y>=100) 
	{	pixel.setRed(255);
        
	pixel.setBlue(255);
    
	}
    
	else 
        
	pixel.setBlue(255);

	}

	print(image1);

	![200200redgreemagentablue](https://user-images.githubusercontent.com/31294255/37407376-7f3f4e48-2767-11e8-89e4-ddb104d59e4f.png)