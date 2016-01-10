var i = 1;

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);
  }

function draw(){
  background(30);
  translate(0,-100,0);
  var a = radians(i);
  rotateY(a);
  noStroke();

  beginShape();
    fill(255,255,0);
    vertex(0, 0, 0);
    vertex(-200, 200, -200);
    vertex(200, 200, -200);
  endShape(CLOSE);

  beginShape();
    fill(0,255,0);
    vertex(0, 0, 0);
    vertex(-200, 200, -200);
    vertex(-200, 200, 200);
  endShape(CLOSE);

  beginShape();
    fill(0,0,255);
    vertex(0, 0, 0);
    vertex(-200, 200, 200);
    vertex(200, 200, 200);
  endShape(CLOSE);

  beginShape();
    fill(255,0,0);
    vertex(0,0,0);
    vertex(200, 200, 200);
    vertex(200, 200, -200);
  endShape(CLOSE);

    i++;
}
