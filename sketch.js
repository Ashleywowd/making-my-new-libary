var square1, square2
var net1 , net2


function setup()
 {
  createCanvas(800,400);
 square1 =createSprite(100, 200, 50, 50);
 square2= createSprite(400,200,50,50);

net1 =  createSprite(200,300,50,50);
net2 = createSprite(200,100,50,50);

net1.shapeColor= "blue";
net2.shapeColor= "blue";

 square1.shapeColor="green";
 square2.shapeColor="green";

 net1.velocityY=-2;
 net2.velocityY=4;


}

function draw()
 {
  background(0);  

  square1.x= World.mouseX;
  square1.y= World.mouseY;
  
  if(isTouching(square1,square2))
  {
    square1.shapeColor= "yellow";
    square2.shapeColor= "yellow";
  }
  else
  {
   square1.shapeColor= "green";
   square2.shapeColor= "green";
  }

  bounceoff(net1,net2);
 
  drawSprites();
}

