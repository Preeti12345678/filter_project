var Nose_x=0;
var Nose_y=0;
function preload(){
 lipstick=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
   image(video,0,0,300,300);
   image(lipstick,Nose_x,Nose_y,40,40);
}
function take_snapshot(){
  save("myFilteredImage.png");
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotposes(results){
   if(results.length>0){
       console.log(results);
       Nose_x=results[0].pose.nose.x-20;
       Nose_y=results[0].pose.nose.y-8;
       console.log("Nose X: "+Nose_x);
       console.log("Nose y: "+Nose_y);
   }
}