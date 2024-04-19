var skyHeight;
var grassHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  skyHeight = windowHeight / 2;
  grassHeight = 2 * (windowHeight / 3);
}


function draw() {
  // sky
  noStroke();
  fill(184, 199, 230);
  rect(0, 0, windowWidth, skyHeight);

  // grass
  fill(132, 144, 111);
  rect(0, skyHeight, windowWidth, grassHeight);

  // road
  fill(217, 206, 131);
  rect(0, grassHeight + 20, windowWidth, grassHeight);

  // house
  drawHouse(windowWidth / 2, grassHeight - 80, 200, 150);

  // draw fence
  drawFence(50, grassHeight + 100, 25);

  // draw tree
  drawTree(windowWidth / 3, grassHeight - 100, 100, 250);

  // draw flag
  drawFlag(windowWidth * 0.6, grassHeight - 300, 50);

  // draw flowers
  drawFlowers(windowWidth * 0.8, grassHeight - 50, 50, 10);

   // draw pigs
  drawPigs(windowWidth / 4, grassHeight + 100, 5);
}

function drawHouse(x, y, width, height) {
  // bodyw
  fill(255, 215, 183);
  rect(x - width / 2, y - height, width, height);

  // roof
  fill(135, 76, 67);
  triangle(x - width / 2, y - height, x + width / 2, y - height, x, y - height - 50);
}

function drawFence(x, y, numPosts) {
  let postWidth = 25;
  let postHeight = 130;
  let gap = 30;

  fill(135, 76, 67);
  for (let i = 0; i < numPosts; i++) {
  rect(x + i * (postWidth + gap), y - postHeight, postWidth, postHeight);
  }
}

function drawTree(x, y, trunkWidth, trunkHeight) {
  // trunk
  fill(135, 76, 67);
  rect(x - trunkWidth / 2, y - trunkHeight, trunkWidth, trunkHeight);

  // leaves
  fill(132, 144, 111);
  ellipse(x, y - trunkHeight + 30, 150, 150);
  ellipse(x, y - trunkHeight - 100, 150, 150);
  ellipse(x - 70, y - trunkHeight - 50, 150, 150);
  ellipse(x - 90, y - trunkHeight + 10, 150, 150);
  ellipse(x + 70, y - trunkHeight - 50, 150, 150);
  ellipse(x + 90, y - trunkHeight + 10, 150, 150);
}

function drawFlag(x, y, seatSize) {
  // rope
  stroke(135, 76, 67);
  strokeWeight(5);
  line(x, y, x, y + 200);

  // flag
  fill(210, 105, 30);
  rect(x, y, seatSize, seatSize);
}

function drawFlowers(x, y, size, numFlowers) {
  let petalColor = color(173, 170, 211); // purple
  let centerColor = color(184, 199, 230); // blue

  for (let i = 0; i < numFlowers; i++) {
    let flowerX = x + random(-100, 80);
    let flowerY = y + random(-100, 80);

    // petals
    for (let angle = 0; angle < 360; angle += 60) {
      let petalX = flowerX + cos(radians(angle)) * size * 0.5;
      let petalY = flowerY + sin(radians(angle)) * size * 0.5;
      fill(petalColor);
      ellipse(petalX, petalY, size * 0.5, size * 0.5);
      // center
      fill(centerColor);
      ellipse(flowerX, flowerY, size * 0.5, size * 0.5);
    }
  }
}


function drawPigs(x, y, numPigs) {
  let pigSize = 100;
  let gap = 20;
  for (let i = 0; i < numPigs; i++) {
    drawPig(x + i * (pigSize + gap), y, pigSize);
  }
}

function drawPig(x, y, size) {
  let bodyColor = color(255, 182, 193); // Pink
  let earColor = color(255, 204, 153); // Light Pink
  let eyeColor = color(0); // Black
  let noseColor = color(0); // Black
   let nostrilColor = color(255, 182, 193);

  let bodyWidth = size;
  let bodyHeight = size * 0.7;
  let eyeSize = size * 0.1;
  let noseSize = size * 0.2;
  let earSize = size * 0.2;

  // stroke
  strokeWeight(2);
  stroke(0);

  // body
  stroke(eyeColor)
  fill(bodyColor);
  ellipse(x, y, bodyWidth, bodyHeight);

  // ears
  stroke(eyeColor)
  fill(earColor);
  triangle(x - bodyWidth * 0.4, y - bodyHeight * 0.4, x - bodyWidth * 0.2, y - bodyHeight * 0.6, x - bodyWidth * 0.1, y - bodyHeight * 0.4);
  triangle(x + bodyWidth * 0.4, y - bodyHeight * 0.4, x + bodyWidth * 0.2, y - bodyHeight * 0.6, x + bodyWidth * 0.1, y - bodyHeight * 0.4);

  // eyes
  noStroke()
  fill(eyeColor);
  ellipse(x - bodyWidth * 0.2, y - bodyHeight * 0.2, eyeSize, eyeSize);
  ellipse(x + bodyWidth * 0.2, y - bodyHeight * 0.2, eyeSize, eyeSize);

  // nose
  fill(noseColor);
  ellipse(x, y + bodyHeight * 0.1, noseSize + 10, noseSize);

  // nostril
  noStroke()
  fill(nostrilColor)
  ellipse(x - bodyWidth * 0.08, y - bodyHeight + 75, eyeSize - 3, eyeSize - 3);
  ellipse(x + bodyWidth * 0.08, y - bodyHeight + 75, eyeSize - 3, eyeSize - 3);

  // tail
  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  curveVertex(x + bodyWidth * 0.5, y);
  curveVertex(x + bodyWidth * 0.5, y);
  curveVertex(x + bodyWidth * 0.6, y + bodyHeight * 0.2);
  curveVertex(x + bodyWidth * 0.5, y + bodyHeight * 0.4);
  curveVertex(x + bodyWidth * 0.4, y + bodyHeight * 0.5);
  endShape();
}