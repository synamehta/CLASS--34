class LINE{

    constructor(a,b){
        var options={
            pointA:a,
            bodyB:b,
            stiffness:0.04,
            length:50
        }
this.line=Constraint.create(options);
Matter.World.add(myWorld,this.line);
this.ponitA=a;
    }

    display(){
line(this.pointA.x,this.pointA.y,
        this.line.bodyB.position.x,this.line.bodyB.position.y);

    }
}