class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,options);
        this.width =33;
        this.image = loadImage("paper (1).png");
        World.add(world, this.body);
    }//250,540,20,option
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
} 