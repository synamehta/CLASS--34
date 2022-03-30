class BOX{

     constructor(x,y){
         var options={
            friction:1,
            density:0.04,
            restitution:0.07
         }
        this.box=Matter.Bodies.rectangle(x,y,70,70,options);
        Matter.World.add(myWorld,this.box);
        this.w=70;
        this.h=70;
     }

     display(){
         rectMode(CENTER);
         rect(this.box.position.x,this.box.position.y,this.w,this.h);

     }

}