class Game{
constructor(){}
getState(){
    var gs=database.ref("gameState")
    gs.on("value",function(data){
        gameState=data.val()
    })
}
update(state){
    database.ref("/").update({
        gameState:state
    })
    
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

play(){

form.hide()
textSize(30)
text("Start",120,100)
Player.getPlayerinfo()
if(allPlayers!==undefined){
    var DP = 130
    for(var plr in allPlayers){
        if(plr==="player"+player.index){
            fill ("red")
            
        }
        else{
            fill ("black")
        }
    }
    DP=DP+30
    textSize(20)
    text(allPlayers[plr].name + ":"+allPlayers[plr].distance,120,DP)
}
if(keyDown(UP_ARROW)&& player.index!==null){
player.distance=player.distance+50
player.update()

}
}


}