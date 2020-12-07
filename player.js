class Player{

constructor(){

this.index=null;
this.distance=0
this.name=null

}
getcount(){

var playercountpath=database.ref('playercount')
playercountpath.on("value",function(data){
playercount=data.val()

})

}
 updatecount(count){
database.ref('/').update({
playercount:count

})

 }

update(){
var playerindex="players/player"+this.index
database.ref(playerindex).set({
name:this.name,
distance:this.distance
})
}
  
static getPlayerinfo(){
var playerindexpath=database.ref('players')
playerindexpath.on("value",(data)=>{
    allPlayers=data.val()
})
}
}