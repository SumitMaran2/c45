var corona,coronaImg;
var boy;
var obstacles;
var food;
var power;

function preload(){
  coronaImg=loadImage("images/v1.png");
}

function setup() {
  createCanvas(1000,800);
  boy=createSprite(200,400,40,50);
}

function draw() {
  background("grey");  


  spawncorona();
  drawSprites();
}

  function spawncorona(){
    if(frameCount%40 === 0){
      corona=createSprite(200,300,50,20);
      corona.x=(Math.round(random(-4,300)));
      corona.y=(Math.round(random(0,400)));
      corona.velocityX=(Math.round(random(-6,6)));
      corona.velocityY= 4;
      corona.addImage(coronaImg);
      corona.scale=0.2;
    }
  }

