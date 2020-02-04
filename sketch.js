let bulbOn;
let bulbOff;

let brightness = 0;

function setup() {
  createCanvas(400, 400);
  song = loadSound('sound/error.mp3')
bulbOn = loadImage("images/dissapointed 2.jpg")
bulbOff = loadImage("images/dissapointed 1.jpg")
       
}

function draw() {
  background(220);
  
imageMode(CENTER);
  if (brightness ==1 ){
image(bulbOn,width/2,height/2, 300, 300)
  }else{
image(bulbOff,width/2,height/2, 300, 300)
  }
}

function on(){
  brightness = 1;
  print ("UUUUHHHHHhhh");
}

function off(){
  brightness = 0;
  print ("MMMMMmmmm");
}
function touchStarted(){
  on();
  song.play();
}
function touchReleased(){
  off();
}
function togglePlayMode() {
  if (playMode === 'sustain') {
    playMode = 'restart';
  } else {
    playMode = 'sustain';
  }
  sample.playMode(playMode);
}
function mousePressed(){
  on();
  song.play();
}
function mouseReleased(){
  off();
}
