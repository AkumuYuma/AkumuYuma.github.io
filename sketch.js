let v;

function setup() {
  createCanvas(400, 400); 
  background(0);
  v = p5.Vector.random2D; 

} 

function draw() {
  stroke(255, 50);
  translate(width/2, height/2);
  line(0, 0, v.x, v.y);
}
