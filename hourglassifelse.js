function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");

drawhourglass(100,100,.25,"cyan")

}

function drawhourglass(x,y,size,ifColor) {
  
  if (mouseX < 100) {
    fill("red");
  } else if (mouseX >= 100 && mouseX < 200) {
    fill("purple");
  } else if (mouseX > 200 && mouseX < 300) {
    fill(ifColor);
  }
  scale(size)
  beginShape();
  vertex(x, y);
  vertex(100, 300);
  vertex(300, 100);
  vertex(200, 350);

  endShape(CLOSE);
  
  
  
}
