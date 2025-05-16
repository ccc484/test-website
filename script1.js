const sketch1 = (p) => {
  p.setup = function () {
    p.createCanvas(300, 200);
    p.background(240);
  };

  p.draw = function () {
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    p.fill(r, g, b);
    p.ellipse(p.mouseX, p.mouseY, 20);
  };
};

new p5(sketch1, "sketch1");