var x = [];
var y = [];
var d = [];
var c = []

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (var i = 0; i < 100; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
    d[i] = random(10, 30);
    c[i] = random(150, 200);
  }
}
  
function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < 50; i = i + 1) {
    // draw two ellipses
    fill(c[i], c[i], c[i]);
    ellipse(x[i], y[i], d[i]);
    // 1% of the time
  }
  
  for (var i = 0; i < 50; i = i + 1) {
    // 1% of the time
    if (random() < 0.01) {
      // random diameter between 10 and 400
      d[i] = random(10, 30);
    }
    // 2% of the time
    if (random() < 0.02) {
      // random diameter between 10 and 400
      d[i] = random(10, 30);
    }
  }
}
