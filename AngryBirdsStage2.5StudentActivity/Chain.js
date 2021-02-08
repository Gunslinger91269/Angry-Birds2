class Chain{
    constructor(bodyA,bodyB){
        var option = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.1,
            length:400
        }
        this.Chain = Matter.Constraint.create(option)
        World.add(world,this.Chain)
    }
    display(){
        var pointA = this.Chain.bodyA.position
        var pointB = this.Chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }