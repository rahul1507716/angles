class ground{
  constructor(x,y,width,height){
   var options = {isStatic:true}
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
 }
 display(){
  var posXY = this.body.position;
  rectMode(CENTER);
  fill("green");
  rect(posXY.x,posXY.y,this.width,this.height);
 }
}