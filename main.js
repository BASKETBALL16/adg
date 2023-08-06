video="";

function preload(){
}

    function setup(){
        canvas=createCanvas(400, 320);
        canvas.center();
        video=createCapture(VIDEO);
        video.size(430, 380);
        video.hide();
       
    }

function draw(){
    image(video, 0, 0, 400, 320);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting Objects";
}

function modelLoaded(){
}