var song, fft, button;

var volhistory = [];
var w;

function toggleSong() {
  if (song.isPlaying()) {
    song.stop();
    button.innerHTML = "Play";
  } else {
    song.play();
    button.innerHTML = "Stop";
  }
}

function preload() {
  song = loadSound("../assets/Alan Walker - Fade [NCS Release].mp3");
}

function setup() {
  createCanvas(windowWidth, 400);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton("Play/Stop");
  button.mousePressed(toggleSong);
  // song.play();
  fft = new p5.FFT();
  w = width / 64;
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  console.log(spectrum);

  // stroke(255);

  noStroke();
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i * 5, 255, 255);
    rect(i * w, y, w - 2, height - y);
  }
  stroke(255);
  noFill();

  // background(200);
  // let spectrum = fft.analyze();
  // console.log(spectrum);

  // // noStroke();
  // // fill(37, 255, 255);
  // beginShape();
  // for (i = 0; i < spectrum.length; i++) {
  //   vertex(i, map(spectrum[i], 0, 255, height, 0));
  // }
  // endShape();
}
