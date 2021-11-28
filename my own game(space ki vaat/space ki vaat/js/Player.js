class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0 ;
  }

  getCount(){
    var CraftCountRef = database.ref('CraftCount');
   CraftCountRef.on("value",(data)=>{
      CraftCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      CraftCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name:this.name,
      //distance:this.distance,
      rank:this.rank
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  




}
