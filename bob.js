class bob {
    constructor (x, y, radius) {
        var options = {
            'restitution': 1,
            'density': 1,
            'friction': 1
        }
        
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        fill(rgb(255, 105, 180));
        circle(pos.x, pos.y, this.radius);
        translate(this.body.position.x, this.body.position.y);
        pop();
    }
}