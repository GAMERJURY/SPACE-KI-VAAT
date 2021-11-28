class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      'gameState': state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var CraftCountRef = await database.ref('CraftCount').once("value");
      if (CraftCountRef.exists()) {
        CraftCount = CraftCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    backGround = createSprite(100, 500, displayWidth - 40, displayHeight - 30)
    backGround.addImage(groundImage);
    backGround.velocityX = -3;
   
    craft1 = createSprite(100, 500);
    craft1.addImage(craft1Image);
    craft1.scale = 0.5
    craft1.visible=false
    craft2 = createSprite(100, 500);
    craft2.addImage(craft2Image);
    craft2.scale = 0.5
    craft2.visible=false
    crafts = [craft1, craft2]; 
    
    
  }

  play() {
    form.hide();
     if (backGround.x <890) {
      backGround.x = backGround.width / 2;
    }
    
    

    Player.getPlayerInfo();
    //  player.getCarsAtEnd();

    

    if (allPlayers !== undefined) {

      //index of the array
      var index = 0;

      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
         if (index === player.index) {
          crafts[index-1].visible=true
        }
        if (keyCode ===DOWN_ARROW && player.index !== null) {
          crafts[index-1].velocityY = 3
          craft1.addImage(craftD);
          craft2.addImage(craftD);
        
        }
      
        if (keyCode ===UP_ARROW && player.index !== null) {
          crafts[index-1].velocityY = -3
          craft1.addImage(craftD);
          craft2.addImage(craftD);
        
      }


  
  
  }
    


    }
   drawSprites();
   if(dushmanGroup.isTouching(craft1)){
    //console.log("asasasas")
    loose = createSprite(300,300)   
    loose.addImage(looseImage)
    //craft1.hide()
    //dushmanGroup.hide()
  }
  if(dushmanGroup.isTouching(craft2)){
   loose = createSprite(1,1)   
    loose.addImage(looseImage)
    //craft2.hide()
    //dushmanGroup.hide()
  }
  }

  end() {
    console.log("game end")
    console.log(player.rank)
  }
}
