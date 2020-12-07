class GameState {

constructor(){
}
getState(){

var gameStatepath=database.ref('gameState')
gameStatepath.on("value",function (data){
    gameState=data.val();

})
}
update(state){
database.ref('/').update({
    gameState:state
})

}

async start(){

    if(gameState===0){
    player=new Player();
    var playercountpath=await database.ref('playercount').once("value")
    if(playercountpath.exists()){
playercount=playercountpath.val()
player.getcount()

    }
    
    form=new Form();
    form.display();

    }

    }
    play(){
    form.hide()
    text("Game Start",200,100)
    Player.getPlayerinfo()
    if(allPlayers!==undefined){
    var displayPosition=170
    for(var plr in allPlayers){
        if(plr==="player"+player.index){
    fill("red")
        }

        else{
    fill("black")
        }

    displayPosition=displayPosition+30
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,140,displayPosition)
    }

    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+100
    player.update()
    }

    }
    }