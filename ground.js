class Ground{
    constructor(){

        this.body = Bodies.rectangle(200,390, 400,20, {isStatic: true});
        World.add(world,this.body);
        
    }

    display(){
     var position;
    position = this.body.position;
    rectMode(CENTER);
        rect(position.x, position.y, 400,20);
    }
}