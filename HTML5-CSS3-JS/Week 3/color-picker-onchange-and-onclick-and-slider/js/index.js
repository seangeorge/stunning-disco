function changecolor(){
  var dd1 = document.getElementById("d1");
  dd1.style.backgroundColor = "orange";
}

function docolor(){
  var dd2 = document.getElementById("d2");
  
  //Get color element
  var colorinput = document.getElementById("clr");
  
  //Value of color chooser is accessed using value
  var color = colorinput.value;
  dd2.style.backgroundColor = color;
}

function docolor1(){
  var dd3 = document.getElementById("d3");
  
  //Get color element
  var colorinput1 = document.getElementById("clr1");
  
  //Value of color chooser is accessed using value
  var color1 = colorinput1.value;
  dd3.style.backgroundColor = color1;
}

function dosquare(){
  var dd4 = document.getElementById("d4");
  var sizeinput = document.getElementById("sldr");
  var size = sizeinput.value;
  
  //Get context of canvas
  var ctx = dd4.getContext("2d");
  ctx.clearRect(0,0,dd4.width,dd4.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,size,size);
  
}