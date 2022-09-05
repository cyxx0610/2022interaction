function setup() {
    initializeFields();
    createCanvas(500, 500);
}

function draw() {
    background(color(0xFF, 0xF0, 0x46));
    fill(color(0x6F, 0x85, 0xFF));
    rect(100, 100, 100, 200);
    rect(mouseX, mouseY, 100, 200);
}

function initializeFields() {
}
