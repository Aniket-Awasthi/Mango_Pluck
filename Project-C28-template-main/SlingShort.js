class SlingShort{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1.5
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    fly(){

        this.sling.bodyA=null;
    }

  Launch(bodyA){

    this.sling.bodyA=bodyA;
  }
   
    display(){

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}