class rope {
    constructor (bodyA, bodyB, offsetX, offsetY,length) {
        this.offsetX = offsetX;
        this.offsetY =  offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: length,
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.bodyB = bodyB;
        this.rope = Constraint.create(options);
        this.lenght=length;
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);

        var AnchorAX = pointA.x;
        var AnchorAY = pointA.y;

        var AnchorBX = pointB.x + this.offsetX;
        var AnchorBY = pointB.y + this.offsetY;

        line(AnchorAX, AnchorAY, AnchorBX, AnchorBY);
    }
}