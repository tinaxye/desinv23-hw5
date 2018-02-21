var x = [];
var y = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
	
	for (var i = 0; i < 20; i = i + 1) {
    x[i] = 230;
    y[i] = 120;
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 100, 230, 20);
  
  // draw drip
  // down 3 pixels each frame, but maybe should be accelerating?
	for (var i = 0; i < 100; i = i + 1) {
    ellipse(x[i], y[i], 10);
		y[i] = y[i] + random(0, 25);
		if (y[i] > height*2) {
			// reset
			y[i] = 120;
		}
  }
}
