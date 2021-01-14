var fixedrect,movingrect;

function setup() {
  createCanvas(1200,600);
  fixedrect= createSprite(400, 200, 50, 80);
  fixedrect.shapeColor="red"
  fixedrect.debug=true;
  movingrect= createSprite(200, 200, 80, 30);
  movingrect.shapeColor="red";
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2)
   {
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  else{
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red" 
  }
  drawSprites();
}