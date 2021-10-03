

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(clown_nose , noseX , noseY , 30 , 30);
}

function setup(){
    canvas=createCanvas(300 , 300);
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300 , 300)
    video.hide();
    posenet=ml5.poseNet(video , modelLoaded);
    posenet.on('pose' , gotposes)
}
function modelLoaded(){
   console.log("Model is Loaded"); 
}
function TakeSnapshot(){
    save("ImageWithFilter.png")
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x - 13
        noseY=results[0].pose.nose.y + 10 
    }
}
noseX=0;
noseY=0;