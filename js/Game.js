class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

play(){
  form.hide();
  text("gameStart", 120,100);
  Player = getPlayerInfo();
  if(allPlayers !== undefined){

    var display_position = 130;
    for(var Plr in allPlayers){
    if(Plr === "player"+player.index){
    fill("red");
    }
    else{
      fill("black");
    }
  display_position = display_position+20;
  textSize(15);
  text(allPlayers[Plr].name+":"+allPlayers[Plr].distance, 120,display_position);
  }
}
}



}
