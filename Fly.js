class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.fly);
    }

    fly(){
        this.fly.bodyA=null;
    }

    display(){
        strokeWeight(0)
    }
    
}