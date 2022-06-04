var faca,facaImg;
var fantasma1, fantasmaImg;
var fantasma2, fantasmaImg2;
var céu, céuImg ;
var fantasma;
var gameState;


function preload(){

fantasmaImg= loadImage("fantasma.png");
fantasmaImg2= loadImage("fantasma2.png")
céuImg= loadImage("ceu.jpg")
facaImg= loadImage("faca.png")



}

function setup() {
    createCanvas(600,600);

céu = createSprite(300,300);
céu.addImage("céu",céuImg);
céu.velocityY= 1;

facasGroup= new Group();

fantasma= createSprite(200,200,50,50);
fantasma.scale=0.3;
fantasma.addImage("fantasma",fantasmaImg);



}

function draw() {
    background(0);
    if(gameState = "play") {
        if(keyDown("left_arrow")){
            fantasma.x=fantasma.x-3;
        }
        if(keyDown("right_arrow")) {
            fantasma.x=fantasma.x+3;
        }
        if(keyDown("space")) {
            fantasma.velocityY= -10;
        
        }
    
        spawnFacas();
        fantasma.velocityY= fantasma.velocityY-0.8;

        if(céu.y>400){
            céu.y=300
        }
    
        if(facasGroup.isTouching(fantasma)  || fantasma.y >600){
            fantasma.destroy();
            gameState = "end";
        }

        drawSprites()
    }

    if(gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
    }

}

function spawnFacas() {

    if (frameCount % 240 === 0) {
        var faca = createSprite(200, -50);
        
        faca.x = Math.round(random(120,400));

        faca.addImage(facaImg);
        
        
        faca.velocityY = 1;
        
        fantasma.depth = faca.depth;
        fantasma.depth +=1;
        
        faca.lifetime = 800;

        facasGroup.add(facas);
    }
}
        
        


