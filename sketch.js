const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world 
var drops = []
var maxDrops = 100 ;

function preload(){
    
}

function setup(){
   createCanvas(500 , 800 )

engine = Engine.create();
world= engine.world;


for( var i = 0 ; i<maxDrops ; i++){
    drops.push(new Drops (random(0,500),random(0,700)))

}
}
    


function draw(){
   background (0) ;
Engine.update(engine);

   for( var i = 0 ; i<maxDrops ; i++){
       drops[i].display();
   }



}