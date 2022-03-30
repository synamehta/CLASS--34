class GROUND{

    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Matter.Bodies.rectangle(750,490,1500,20,options);
        Matter.World.add(myWorld,this.ground);
        this.w=1500;
        this.h=20;
    }

    display(){
        push();
        fill("green");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
        pop()
    }

}