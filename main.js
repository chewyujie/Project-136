status ="";
objects = [];

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw()
{
    image(video, 0,0,480,380);
}
function start()
{
    objectDetector = ml5.objectDetector('cocosdd',modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objetcts"
}
function modelLoaded()
{
    console.log("modelLoaded")
    status = true;
}