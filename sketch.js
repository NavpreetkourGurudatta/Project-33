var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle
var turn
var score = 0
var gameState,PLAY,END; 

function setup() {
  createCanvas(800, 800);

    fill('white');
    textSize(35)
    text('score = '+score,width-300,50); 

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions =  new Divisions(k, height-divisionHeight/2, 10, divisionHeight)
   // divisions[k].diplay()
  }


     
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  
  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos = new Plinko(j,75);
     
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos = new Plinko(j,175);
     
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos = new Plinko(j,275)
     
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos = new Plinko(j,375);
     
   }


  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles = new Particle(random(width/2-30, width/2+30), 10,10);
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousepressed(){
  if(gameState!== 'END'){
    count++
    particles = new Particle(mouseX,10,10,10)
  }
}
