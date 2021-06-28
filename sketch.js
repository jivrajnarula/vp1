//Create variables here
var dog;
var database;
var foodS,foodStock;
var dogimg,dogimg1;
function preload()
{
	//load images here
  dogimg = loadImage("images/dogimg.png");
  dogimg1 = loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale=0.5
  database = firebase.database();
  var FoodStock=database.ref('Food');
  FoodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87)

 if(keyWentDown(UP_ARROW)) { 
  writeStock(FoodS);
  dog.addImage(dogimg1);
 }
  drawSprites();
  //add styles here

  //Note:PressUP_ARROW Key To Feed Drago Milk!
 
fill('yellow')
text('press up arrow to feed drago milk',50,50)



 
  
}

function readStock(data){ 
  FoodS=data.val();
}


function writeStock(x){ 

  if(x<=0) {  
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



