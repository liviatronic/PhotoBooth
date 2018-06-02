let video;

function setup() {
  createCanvas(320, 240);
  //https needs to be enabled for this to work
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw() {
  //puts video at (0, 0) in canvas
  image(video, 0, 0);
}