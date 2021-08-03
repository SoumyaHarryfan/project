function preload(){

}
function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
}
function modelLoaded(){
    console.log("poseNet is initialized");
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("lip X = "+results[0].pose.lip.x);
        console.log("lip Y =" +results[0].pose.lip.y);
    }
}
function draw(){
    image(video,300,300);
}