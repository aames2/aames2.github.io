function setup() {
    createCanvas(400, 400);
    background(220);
}

function draw() {

    if (mouseIsPressed) {
        fill(0); // Set the fill color to black
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
    }
}