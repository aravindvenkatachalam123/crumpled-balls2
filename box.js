class Box {
  constructor(x, y, width, height) {
    var options ={
      'density':1.0,
      'friction':1.0,
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.dustbin=loadImage("dustbingreen.png");
  }
  display(){
    rectMode(CENTER);
    fill("white");
    rect(this.body.position.x,this.body.position.y,this.width, this.height);
    image (this.dustbin,510,350)
}

}