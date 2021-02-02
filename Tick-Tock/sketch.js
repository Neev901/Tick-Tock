
function setup() {
  canvas = createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(400,400)
  rotate(-90)

  if(hour()>12){
  h = hour() - 12
  }
  m = minute()
  s = second()
  h_angle = map(h,0,12,0,360)
  m_angle = map(m,0,60,0,360)
  s_angle = map(s,0,60,0,360)

  push()
  rotate(h_angle)
  stroke("red")
  strokeWeight(12)
  line(0,0,100,0)
  pop()

  push()
  rotate(m_angle)
  stroke("green")
  strokeWeight(12)
  line(0,0,200,0)
  pop()

  push()
  rotate(s_angle)
  stroke("blue")
  strokeWeight(12)
  line(0,0,300,0)
  pop()

  noFill()
  push()
  stroke("red")
  strokeWeight(15)
  arc(0,0,650,650,0,h_angle)
  pop()

  push()
  stroke("green")
  strokeWeight(15)
  arc(0,0,700,700,0,m_angle)
  pop()

  push()
  stroke("blue")
  strokeWeight(15)
  arc(0,0,750,750,0,s_angle)
  pop()


  drawSprites();
}