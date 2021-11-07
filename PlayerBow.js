class Bow
{
    constructor(a,b,c,d)
{
    this.x=a
    this.y=b
    this.width=c
    this.height=d

var options={
    isStatic:true,//Static means staying still
    restitution:0.3,
    density:1,
    friction:0    
}

this.body=Bodies.rectangle(a,b,c,d,options)
World.add(world,this.body)
this.bowImage=loadImage("assets/playerArcher.png")
}



display()
{

push()
var bodyPosition=this.body.position
translate(bodyPosition.x,bodyPosition.y)
image(this.bowImage,0,0,this.width,this.height)
pop()
}
}

