var x;
var y;
var position = [];

function setup() {
    createCanvas(400, 400);
    background(25);
    x = width / 2;
    y = height / 2;
}

function draw() {
    point(x, y);
    let red = floor(random(256));
    let green = floor(random(256));
    let blue = floor(random(256));
    stroke(red, green, blue);
    strokeWeight(3);

    let r = floor(random(4));

    while (r == position[0]) {

        r = floor(random(4));
    }

    switch (r) {
        case 0:
            if (x < width - 1)
              x = x + 2;
            break;
        case 1:
            if (x > 1)
                x = x - 2;
            break;
        case 2:
            if (y < height - 1)
                y = y + 2;
            break;
        case 3:
            if (y > 1)
                y = y - 2;
            break;
    }
    position.pop();
    position.push(r);
}