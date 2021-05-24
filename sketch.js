let date = new Date();
let hours = 0;
let minutes = 0;
let seconds = 0;

hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

tlog = () => console.log(hours, minutes, seconds);

setInterval(tlog, 1000);

function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
}

function draw() {
	frameRate(1);
	background(200);
	translate(250, 250);
	fill(243, 255, 198);
	ellipse(0, 0, 496);
	strokeWeight(2);
	fill(0);
	ellipse(0, 0, 20);
	push();
	for (i = 0; i <= 12; i++) {
		rotate(360 / 12);
		fill(0);
		ellipse(0, 230, 10);
		strokeWeight(1);
	}
	pop();

	push();
	rotate(30);
	rotate((hours * 360) / 60);
	line(0, 0, 0, -185);
	triangle(-5, -185, 0, -195, 5, -185);
	pop();

	push();
	rotate((minutes * 360) / 60);
	line(0, 0, 0, -190);
	triangle(-5, -190, 0, -200, 5, -190);
	pop();

	push();
	rotate((seconds * 360) / 60);
	line(0, 0, 0, -210);
	triangle(-5, -200, 0, -210, 5, -200);
	pop();

	seconds++;
	minutes += 1 / 60;
	hours += 1 / 3600;
}