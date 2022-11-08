song="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function preload(){
    song=loadSound("https://www.youtube.com/watch?v=RE87rQkXdNw");
}

function play(){
    song.play();
}