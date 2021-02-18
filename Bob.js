class Bob{


    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.4,
            friction:0.5,
            density:1,
    
    
    
        }
        this.body=Bodies.circle(x,y,30,options);
        this.x=x;
        this.y=y;
        this.r=60;
        World.add(world, this.body);
            
            
            
            }
            
            display(){
                var paperoes=this.body.position;
                push ();
             translate (paperoes.x,paperoes.y);
             rectMode(CENTER);
             stroke("magenta");
             strokeWeight(3);
             fill ("yellow");
    
             ellipse(0,0,this.r,this.r);
                pop ();
        
    }}