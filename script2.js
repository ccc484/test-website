const sketch2 = (p) => {
  p.setup = function () {
    p.createCanvas(200, 200);
    p.background(220);
  };

  p.draw = function () {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    p.fill(r, g, b);
    p.rect(p.mouseX, p.mouseY, 20, 20);
  };
};

new p5(sketch2, "sketch2");