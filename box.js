class box{
  constructor(x,y,width,height){
   var options = {restitution:1}
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);  
    }
   display(){
    var posXY = this.body.position;
    var angle = this.body.angle;
    push();
    translate(posXY.x,posXY.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
   }
}