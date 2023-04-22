function setup() {
  createCanvas(800, 1000);
}

function draw() {
  background(220);
  textSize(20);
  textAlign(CENTER, TOP);
  text('CURRENT TIME IS\n'+hour()+' : '+minute()+' : '+second(), 0, 12, width);
  push();
  translate(0, 200)

  push()
  fill('#C69F45')
  ellipse(400, 400, 800, 800)
  pop()
  ellipse(400, 400, 760, 760)
  my_rect(400, 400, 200*7/4, 5, second()*6-90, color(255, 0, 0))
  my_rect(400, 400, 160*7/4, 20, minute()*6-90, color(0, 255, 0))
  my_rect(400, 400, 100*7/4, 20, hour()*30-90, color(0, 0, 255))
  ellipse(400, 400, 30, 30)
  textSize(50);
  text('12', 400, 40)
  text('6', 400, 700)
  text('3', 740, 360)
  text('9', 60, 360)
  text('1', 580, 80)
  text('2', 700, 200)
  text('4', 700, 550)
  text('5', 580, 650)
  text('7', 240,650)
  text('8', 120, 550)
  text('10', 120, 200)
  text('11', 240, 80)
  pop();
}

function my_rect(x, y, w, h, d, c){
  push();
  translate(x, y)
  fill(c)
  rotate(radians(d));
  rect(0, -h/2, w, h)
  pop();
}