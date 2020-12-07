    class Form{
    constructor(){
            this.input=createInput("name")
            this. button=createButton("play")
            this. greeting=createElement('h3')
    }
    hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
    }
    display(){
    var tittle=createElement('h2')
    tittle.html("Car Racing Game")
    tittle.position(150,300)
    this.input.position(200,100)
    this.button.position(300,450)
    this.button.mousePressed(

    function(){
    this.input.hide()
    this.button.hide()
    player.name=this.input.value()
    playercount=playercount+1
    player.index=playercount
    player.update()
    player.updatecount(playercount)
    this.greeting.html("Hello"+player.name)
    this.greeting.position(290,400)
    }
   
    );
    
    }

    }