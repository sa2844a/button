var Cx, Cy;
var Counter = 80;
var Sign = 1;
var StepSize = 3;
var running = true;
var button;

function setup() {
	createCanvas(610, 610);
	Cx = width/2;
	Cy = height/2;
	background(100,50,150,160);

	button = createButton('Pause');
	button.position(150,30);
	button.size(45,30);
	button.mousePressed(Pause);
}

function draw() {
	background(100,50,150)
	if (running) {
		Counter = Counter + Sign* StepSize;
	}
	if (Counter > width || Counter < 0) {
		Sign = Sign * -1
	}
	
	fill(10,200,30);
	ellipse(Counter, Counter, 100, 100);
	fill(30,10,200);
	ellipse(width-Counter, width-Counter,100,100);
	fill(200,30,10);
	triangle(Counter, Counter, 320, 100, 310, 80);
	fill(200,155,10);
	triangle(width-Counter, width-Counter, 320, 80, 310, 60);
	fill(Counter, width-Counter, 192, 127);
  stroke(150, 200, 20);
	}
	
	function Pause() {
		running = !running;
	}
