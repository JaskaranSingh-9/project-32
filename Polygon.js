class Polygon {
    constructor(x,y,radius) {
      var options ={
        'density':10.0,
        'friction': 1,
        'restitution': 0.4
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("polygon.png")
      World.add(world, this.body);
    }

    display() {
          var pos = this.body.position;
         
          push();
          translate(this.body.position.x, this.body.position.y);
          
          
         ellipseMode(RADIUS);
         ellipse(0, 0, this.radius);
         imageMode(CENTER);
         image(this.image, 0, 0, 40, 40);
         pop();
      }
    }