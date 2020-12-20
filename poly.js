class Polygon{
    constructor(x,y,radius){
    var options = {
        'restitution':0.8,
        'friction':1,
        'desnity':1
       
    }

    this.body = Bodies.circle(x,y,radius/2,options);
    this.radius=radius;
    
this.image=loadImage("polygon.png");
    World.add(world, this.body);


}
display(){
    var pos = this.body.position
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    
    image(this.image,0,0,this.radius*2,this.radius*2);
    pop();
    
}

}

