function setup(){
    canvas=createCanvas(400,300)
    canvas.center()
    }
    
    function preload(){
    
    }
    function draw(){
       strokeWeight(7);
       stroke("red");
       if(mouseIsPressed){
         line(pmouseX,pmouseY,mouseX,mouseY);
       }
    }
    function clear_canvas(){
      background("black");
    }