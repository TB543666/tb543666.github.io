let ball = {
  x: 200,
  y: 300,
  radius: 50,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(125);

  ball.x = mouseX;
  ball.y = mouseY;

  ellipse(ball.x,ball.y,ball.radius + 200,ball.radius + 200);

  fill(0);
  ellipse(ball.x,ball.y,ball.radius,ball.radius);

  ellipse(ball.x + 50,ball.y,ball.radius,ball.radius);
  ellipse(ball.x - 50,ball.y,ball.radius,ball.radius);

  ellipse(ball.x,ball.y + 50,ball.radius,ball.radius);
  ellipse(ball.x,ball.y - 50,ball.radius,ball.radius);

  ellipse(ball.x + 50,ball.y + 50,ball.radius,ball.radius);
  ellipse(ball.x + 50,ball.y - 50,ball.radius,ball.radius);

  ellipse(ball.x - 50,ball.y + 50,ball.radius,ball.radius);
  ellipse(ball.x - 50,ball.y - 50,ball.radius,ball.radius);
}

function mouseClicked() {
  background(0);
}
