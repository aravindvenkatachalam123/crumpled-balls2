class Paper {
    constructor() {
      var options ={
        isStatic:false,
        'density':1.5,
        'resitution':1.0,
       'friction':0.5
      }
      this.body = Bodies.circle(56, 690, 70,options);
      World.add(world, this.body);
      this.image=loadImage("paper.png");
      
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      fill("indigo");
      image(this.image,0, 0,55, 55);
      pop();
    }
  
  }
