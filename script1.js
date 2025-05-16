const sketch1 = (p) => {
  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(240);
  };

  p.draw = function () {
    p.fill(255, 0, 0);
    p.ellipse(p.mouseX, p.mouseY, 20);
  };
};

new p5(sketch1, "sketch1");