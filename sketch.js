//Create variables here
var dog;
var happydog;
var database;
var foodS;
var foodStock;
var dogsprite;
function preload()
{
  loadImag = loadImage("images/dogImg.png")
  loadimAg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {  
  
  database = firebase.database();
  createCanvas(500, 500);
  dogsprite = createSprite(250,250,10,10);
  dogsprite.addImage(loadImag)
  foodStock = database.ref('Food');
  foodStock.on("value",readstock);
  
}


function draw() {  

  drawSprites();
  textSize(25)
  text("Note:Press up arrow key to feed drago milk!",10,10)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogsprite.addImage(loadimAg2) ;
  }

  //add styles here

}
function readstock(data){
  foodS = data.val()
}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{ x= x-1}
  database.ref('/').update({
    food:x
  })
}


