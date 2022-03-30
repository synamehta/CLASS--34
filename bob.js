class BOB{

    constructor(){
        this.bob=Matter.Bodies.circle(200,200,80);
        Matter.World.add(myWorld,this.bob);
        this.r=80;
    }

    display(){
        
        push();
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.bob.position.x,this.bob.position.y,this.r,this.r);
        pop();
    }
}