let eye1x = 0, eye1y = 0, eye2x = 0, eye2y = 0, nosex = 0, nosey = 0;
function setup() {
    createCanvas(480, 480);
    video = createCapture(VIDEO);
    video.hide();
    pose = ml5.poseNet(video);
    pose.on('pose', getPoses);
}
function draw() {
    background(220);
    image(video, 0, 0);
    fill(255, 0, 0);
    ellipse(eye1x, eye1y, 10);
    fill(255, 0, 0);
    ellipse(eye2x, eye2y, 10);
    fill(255, 0, 0);
    ellipse(nosex, nosey, 10);
}
function getPoses(poses) {
    if (poses.length > 0) {
        eye1x = poses[0].pose.keypoints[1].position.x;
        eye1y = poses[0].pose.keypoints[1].position.y;

        eye2x = poses[0].pose.keypoints[2].position.x;
        eye2y = poses[0].pose.keypoints[2].position.y;

        nosex = poses[0].pose.keypoints[0].position.x;
        nosey = poses[0].pose.keypoints[0].position.y;
    }
}

