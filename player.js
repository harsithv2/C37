class Player{
    constructor(){
        this.indew=null
        this.distance=0
        this.name=null
    }
    getCount(){
        var pc=database.ref("playerCount")
        pc.on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
        
    }
    update(){
        var PI="players/player"+this.index
        database.ref(PI).set({name:this.name,distance:this.distance})
    }
    static getPlayerinfo(){
            var GPI = database.ref("players")
            GPI.on("value",(data)=>{
                allPlayers=data.val()
            })

    }
}