var gameState=0;
var playercount;
var form,player,game;
var allPlayers;
var distance=0



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

game=new GameState()
game.getState()
game.start()


}

function draw(){
  background("white");
  
if(playercount===4){
game.update(1)

}

  if(gameState===1){
clear()
game.play()

  }
 
}

