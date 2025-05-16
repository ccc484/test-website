const sketch2 = (p) => {
  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(220);
  };

  p.draw = function () {
    p.fill(0, 0, 255);
    p.rect(p.mouseX, p.mouseY, 20, 20);
  };
};

new p5(sketch2, "sketch2");