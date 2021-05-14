function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(650, 200);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 120, 90, 400, 300);

  fill(200, 0, 0);
  stroke(200, 0, 0);
  circle(50, 50, 80);

  circle(50, 430, 80);

  circle(590, 50, 80);

  circle(590, 430, 80);

  fill(0,0, 150);
  stroke(0, 0, 150);
  rect(90, 40, 460, 20);

  rect(90, 420, 460, 20);

  rect(40, 90, 20, 300);

  rect(580, 90, 20, 300);
}

function take_snapshot(){    
  save('student_image.png');
}
