class Form{

constructor(){
    this.input = createInput("name")
    this.button= createButton("PLAY")
    this. greeting=createElement("h3")
}
hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}

display(){

var title=createElement("h2")
title.html("CarRace")
title.position(130,0)

this.input.position(150,150)

this.button.position(200,180)

this.button.mousePressed(()=>{
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
    this.greeting.html("WAZ UP"+ player.name + "Waiting for people to bounce in")
    this.greeting. position(200,200)
})
}







}