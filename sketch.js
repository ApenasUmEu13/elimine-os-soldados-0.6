var PLAY = 1;
var susto = 0;
var gameState = PLAY;
var cenario
var cenarioIMG
var mão
var mãoIMG
var inimigo
var inimigoIMG
var brilinhoIMG

var brilinho
var pedra
var faustãoIMG
var som_tiro
var som_susto
var musica_do_jogo
var obstaclesGroup
var grupo
var brilinhoGrup
var score = 0;
function preload(){
    cenarioIMG = loadImage("cenario.png");
    brilinhoIMG = loadImage("blilinho.png");
mãoIMG = loadImage("mão com arma.png");
pedra = loadImage("preda.png");
inimigoIMG = loadImage("inimigo.png");
musica_do_jogo= loadSound("bit_music.mp3")
som_susto = loadSound("audio michael jackson pra trolagem (mp3cut.net).m4a")
som_tiro = loadSound("0008657.mp3")
faustãoIMG = loadImage("C vai more.jpeg");

}

function setup() {
 createCanvas(1440,715)
 obstaclesGroup = new Group();
 grupo = new Group();
 brilinhoGrup = new Group();
 mão = createSprite(720, 600);
 mão.addImage(mãoIMG);
 mão.scale = (3.0)
    brilinho = createSprite(mouseX, mouseY)
    brilinho.addImage(brilinhoIMG)
   

 }

function draw() {
    background(cenarioIMG);
    textSize(30);
    fill("blue")
    text("Score: " + score, 30, 50);
  
   mão.x = mouseX;

   if(!musica_do_jogo.isPlaying()){
    musica_do_jogo.loop()
    musica_do_jogo.setVolume(0.2)
}

   spawnObstacles();
   
   
   
   brilinhoGrup.overlap(obstaclesGroup, function(atirador, atirado){
    atirador.remove()
atirado.remove()
score = score +1
})
  




if(score > 10){
    if (frameCount % 90 === 0) {
        var obstacle = createSprite(0,520);
        obstacle.setCollider('rectangle', 0, 0, 30, 57)
          

        obstacle.velocityX = (20 + 1 * score);
       //obstacle.debug = true;
        
        
        obstacle.addImage(inimigoIMG);

        mão.depth = obstacle.depth + 1        
        obstacle.scale = 6.0;
        obstacle.lifetime = width/obstacle.velocityX;
        obstaclesGroup.add(obstacle);
        
        
    }
}

if(score > 20){
    if (frameCount % 100 === 0) {
        var obstacle = createSprite(0,220);
        obstacle.setCollider('rectangle', 0, 0, 30, 57)
          

        obstacle.velocityX = (30 + 1 * score);
       //obstacle.debug = true;
        
        
        obstacle.addImage(inimigoIMG);

        mão.depth = obstacle.depth + 1        
        obstacle.scale = 6.0;
        obstacle.lifetime = width/obstacle.velocityX;
        obstaclesGroup.add(obstacle);
        
        
    }
    
}

if(score > 30){
if (frameCount % 110 === 0) {
    var obstacle = createSprite(1450,220);
    obstacle.setCollider('rectangle', 0, 0, 30, 57)
      

    obstacle.velocityX = -(40 + 1 * score);
   //obstacle.debug = true;
    
    
    obstacle.addImage(inimigoIMG);

    mão.depth = obstacle.depth + 1        
    obstacle.scale = 6.0;
    obstacle.lifetime = width/obstacle.velocityX;
    obstaclesGroup.add(obstacle);
}
    
}

if(score > 40){
    if (frameCount % 120 === 0) {
        var obstacle = createSprite(720,0);
        obstacle.setCollider('rectangle', 0, 0, 30, 57)
          
    
        obstacle.velocityY = (50 + 1 * score);
       //obstacle.debug = true;
        
        
        obstacle.addImage(inimigoIMG);
    
        mão.depth = obstacle.depth + 1        
        obstacle.scale = 6.0;
        obstacle.lifetime = width/obstacle.velocityX;
        obstaclesGroup.add(obstacle);
    }
        
    }

    if(score > 50){
        if (frameCount % 130 === 0) {
            var obstacle = createSprite(720,720);
            obstacle.setCollider('rectangle', 0, 0, 30, 57)
              
        
            obstacle.velocityY = -(50 + 1 * score);
           //obstacle.debug = true;
            
            
            obstacle.addImage(inimigoIMG);
        
            mão.depth = obstacle.depth + 1        
            obstacle.scale = 6.0;
            obstacle.lifetime = width/obstacle.velocityX;
            obstaclesGroup.add(obstacle);
        }
            
        }

        

   drawSprites()
}   

       
    
function mouseClicked(){
    var brilinho = createSprite(mouseX, mouseY)
    brilinho.addImage(brilinhoIMG)
    brilinho.scale = 2
    brilinho.lifetime = 5
    brilinhoGrup.add(brilinho);
    som_tiro.play()
    som_tiro.setVolume(0.03)
}
function spawnObstacles() {
    if (frameCount % 50 === 0) {
        var obstacle = createSprite(1450,520);
        obstacle.setCollider('rectangle', 0, 0, 30, 57)
          

        obstacle.velocityX = -(10 + 1 * score);
       //obstacle.debug = true;
        
        
        obstacle.addImage(inimigoIMG);

        mão.depth = obstacle.depth + 1        
        obstacle.scale = 6.0;
        obstacle.lifetime = width/obstacle.velocityX;
        obstaclesGroup.add(obstacle);
        
        
    }
}