let eye1x = 0, eye1y = 0,
    eye2x = 0, eye2y = 0,
    nosex = 0, nosey = 0,
    ear1x = 0, ear1y = 0,
    ear2x = 0, ear2y = 0,
    shoulder1x = 0, shoulder1y = 0,
    shoulder2x = 0, shoulder2y = 0,
    elbow1x = 0, elbow1y = 0,
    elbow2x = 0, elbow2y = 0,
    wrist1x = 0, wrist1y = 0,
    wrist2x = 0, wrist2y = 0,
    hip1x = 0, hip1y = 0,
    hip2x = 0, hip2y = 0,
    knee1x = 0, knee1y = 0,
    knee2x = 0, knee2y = 0,
    ankle1x = 0, ankle1y = 0,
    ankle2x = 0, ankle2y = 0;
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
    fill(255, 0, 0);
    ellipse(ear1x, ear1y, 10);
    fill(255, 0, 0);
    ellipse(ear2x, ear2y, 10);
    fill(255, 0, 0);
    ellipse(shoulder1x, shoulder1y, 10);
    fill(255, 0, 0);
    ellipse(shoulder2x, shoulder2y, 10);
    fill(255, 0, 0);
    ellipse(elbow1x, elbow1y, 10);
    fill(255, 0, 0);
    ellipse(elbow2x, elbow2y, 10);
    fill(255, 0, 0);
    ellipse(wrist1x, wrist1y, 10);
    fill(255, 0, 0);
    ellipse(wrist2x, wrist2y, 10);
    fill(255, 0, 0);
    ellipse(hip1x, hip1y, 10);
    fill(255, 0, 0);
    ellipse(hip2x, hip2y, 10);
    fill(255, 0, 0);
    ellipse(knee1x, knee1y, 10);
    fill(255, 0, 0);
    ellipse(knee2x, knee2y, 10);
    fill(255, 0, 0);
    ellipse(ankle1x, ankle1y, 10);
    fill(255, 0, 0);
    ellipse(ankle2x, ankle2y, 10);

}
function getPoses(poses) {
    if (poses.length > 0) {
        eye1x = poses[0].pose.keypoints[1].position.x;
        eye1y = poses[0].pose.keypoints[1].position.y;

        eye2x = poses[0].pose.keypoints[2].position.x;
        eye2y = poses[0].pose.keypoints[2].position.y;

        nosex = poses[0].pose.keypoints[0].position.x;
        nosey = poses[0].pose.keypoints[0].position.y;

        ear1x = poses[0].pose.keypoints[3].position.x;
        ear1y = poses[0].pose.keypoints[3].position.y;

        ear2x = poses[0].pose.keypoints[4].position.x;
        ear2y = poses[0].pose.keypoints[4].position.y;

        shoulder1x = poses[0].pose.keypoints[5].position.x;
        shoulder1y = poses[0].pose.keypoints[5].position.y;

        shoulder2x = poses[0].pose.keypoints[6].position.x;
        shoulder2y = poses[0].pose.keypoints[6].position.y;

        elbow1x = poses[0].pose.keypoints[7].position.x;
        elbow1y = poses[0].pose.keypoints[7].position.y;

        elbow2x = poses[0].pose.keypoints[8].position.x;
        elbow2y = poses[0].pose.keypoints[8].position.y;

        wrist1x = poses[0].pose.keypoints[9].position.x;
        wrist1y = poses[0].pose.keypoints[9].position.y;

        wrist2x = poses[0].pose.keypoints[10].position.x;
        wrist2y = poses[0].pose.keypoints[10].position.y;

        hip1x = poses[0].pose.keypoints[11].position.x;
        hip1y = poses[0].pose.keypoints[11].position.y;

        hip2x = poses[0].pose.keypoints[12].position.x;
        hip2y = poses[0].pose.keypoints[12].position.y;

        knee1x = poses[0].pose.keypoints[13].position.x;
        knee1y = poses[0].pose.keypoints[13].position.y;

        knee2x = poses[0].pose.keypoints[14].position.x;
        knee2y = poses[0].pose.keypoints[14].position.y;

        ankle1x = poses[0].pose.keypoints[15].position.x;
        ankle1y = poses[0].pose.keypoints[15].position.y;

        ankle2x = poses[0].pose.keypoints[16].position.x;
        ankle2y = poses[0].pose.keypoints[16].position.y;

    }
}

