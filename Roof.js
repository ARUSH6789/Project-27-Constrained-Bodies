class Roof{
    constructor(x,y){ 
        this.body = Bodies.rectangle(x,y,300,30,{isStatic:true});
        this.width = 300;
        this.height = 30;
        World.add(world,this.body);
    }

   //roof created;
    display(){
        push();
        rectMode(CENTER);
        fill("red")
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();

        //roof displayed;
    }
}