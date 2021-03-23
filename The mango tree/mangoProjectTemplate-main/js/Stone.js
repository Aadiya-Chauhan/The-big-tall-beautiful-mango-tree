class stone{
    constructor(hieght, width) {
        this.hieght = hieght;
        this.width = width;
        this.x = 235;
        this.y = 420; 
        this.stoneThickness = 3;
        
        this.image = loadImage("images/stone.png");
        this.stoneBody = Bodies.rectangle(this.x, this.y, this.width, this.hieght, this.stoneThickness);
        World.add(world, this.stoneBody);
    }

    display() {
        var posBody = this.stoneBody.position;
        push();
        translate(posBody.x, posBody.y + 10);
        imageMode(CENTER);
        image(this.image, 0, -this.hieght/2,this.width, this.hieght);
    }
    


}