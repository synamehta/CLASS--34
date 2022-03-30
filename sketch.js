var myEngine,myWorld;
var bob1,ground,line;
var box1,box2,box3,box4,box5,box6;
var box11,box21,box31,box41,box51,box61;
var box111,box211,box311,box411,box511,box611;


function setup(){

    createCanvas(1500,500);

    myEngine=Matter.Engine.create();

    myWorld=(myEngine.world);

    ground=new GROUND();

    bob1=new BOB();

    line=new LINE({x:100,y:200},bob1.bob);

    box1=new BOX(800,100);
    box2=new BOX(800,100);
    box3=new BOX(800,100);
    box4=new BOX(800,100);
    box5=new BOX(800,100);
    box6=new BOX(800,100);

    box11=new BOX(900,100);
    box21=new BOX(900,100);
    box31=new BOX(900,100);
    box41=new BOX(900,100);
    box51=new BOX(900,100);
    box61=new BOX(900,100);

    box111=new BOX(1000,100);
    box211=new BOX(1000,100);
    box311=new BOX(1000,100);
    box411=new BOX(1000,100);
    box511=new BOX(1000,100);
    box611=new BOX(1000,100);
}

function draw(){
    background("red");

    Matter.Engine.update(myEngine);
    
    ground.display();

    bob1.display();

    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    fill("cyan");
    box11.display();
    box21.display();
    box31.display();
    box41.display();
    box51.display();
    box61.display();

    fill("lime");
    box111.display();
    box211.display();
    box311.display();
    box411.display();
    box511.display();
    box611.display();

function mouseDragged(){

}
}