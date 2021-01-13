//creating my own libary
//making a user defined function
//bounce off
function bounceoff(object1,object2)
{
  //if object 1 touches object 2 on x axis the object will bounce with each other
  if(object1.x-object2.x < object1.width/2 + object2.width/2 && 
    object2.x-object1 < object1.width/2 + object2.width/2 )
    {
      object1.velocityX = object1.velocityX * (-1)
      object2.velocityX = object2.velocityX * (-1)
    }
 //if object 1 touches object 2 on y axis they will bounce with each other
    if(object1.y-object2.y < object1.height/2 + object2.height/2 && 
      object2.y-object1.y < object1.height/2 + object2.height/2 )
      {
        object1.velocityY = object1.velocityY * (-1)
        object2.velocityY = object2.velocityY * (-1)
      }
}
//making a user defined function for is touching
//making is touching 
function isTouching(object3,object4)
{
  //if objects touches each other it will return to true or remain false
  if(object3.x-object4.x < object3.width/2+object4.width/2 && 
    object4.x - object3.x < object3.width/2+ object4.width/2 && 
    object3.y-object4.y < object3.height/2+object4.height/2 && 
    object4.y - object3.y < object3.height/2+ object4.height/2)
   {
   return true;
   }
   else
   {
   return false;
   }
}