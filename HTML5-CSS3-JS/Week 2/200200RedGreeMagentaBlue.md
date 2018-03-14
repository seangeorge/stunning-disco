



	var image1 = new SimpleImage(200,200);

	for (var pixel of image1.values()) 
	{var x = pixel.getX();
    
	var y = pixel.getY();
    
	if (x<100 & y<100)
        
	pixel.setRed(255);
    
	else if (x>=100 & y<100)
        
	pixel.setGreen(255);
    
	else if (x<100 & y>=100) 
	{
	
pixel.setRed(255);
        
	pixel.setBlue(255);
    
	}
    
	else 
        
	pixel.setBlue(255);

	}

	print(image1);