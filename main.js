song=0;
soy="";
closer="";
score="";
happy="";
thunder="";
left_wrist_y=0;
left_wrist_x=0;
right_wrist_y=0;
right_wrist_x=0;

function preload(){
    soy=loadSound("soy.mp3")
    happy=loadSound("happy.mp3")
    score=loadSound("score.mp3")
    closer=loadSound("closer.mp3")
    thunder=loadSound("thunder.mp3")
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("pose net is intialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wrist_x=results[0].pose.leftWrist.x;
        left_wrist_y=results[0].pose.leftWrist.y;
        right_wrist_x=results[0].pose.rightWrist.x;
        right_wrist_y=results[0].pose.rightWrist.y;
        console.log("left Wrist x = "+left_wrist_x+" left Wrist y = "+left_wrist_y);
        console.log("right Wrist x = "+right_wrist_x+" right Wrist y = "+right_wrist_y);
    }
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song=song+1;
    if(song==1){
    soy.play();
    happy.stop();
    closer.stop();
    score.stop();
    thunder.stop();
    soy.setVolume(1);
    soy.rate(1);
    }
    else if(song==2){
    happy.play();
    soy.stop();
    closer.stop();
    score.stop();
    thunder.stop();
    happy.setVolume(1);
    happy.rate(1);
    }
    else if(song==3){
    thunder.play();
    happy.stop();
    closer.stop();
    score.stop();
    soy.stop();
    thunder.setVolume(1);
    thunder.rate(1);
    }
    else if(song==4){
    score.play();
    happy.stop();
    closer.stop();
    soy.stop();
    thunder.stop();
    score.setVolume(1);
    score.rate(1);
    }
    else if(song==5){
    closer.play();
    happy.stop();
    soy.stop();
    score.stop();
    thunder.stop();
    closer.setVolume(1);
    closer.rate(1);
    }
    else if(song==6){
    song=0;
    soy.stop();
    happy.stop();
    closer.stop();
    score.stop();
    thunder.stop();
    }

}