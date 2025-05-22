let toothpickLen = 40;
let pick = 0;
let numPicks = 500;
let totalOn = 0;
let vertLines = [];
let sketchInstance;

function startSimulation() {
  const inputVal = document.getElementById("numInput").value;
  document.getElementById("PiEstimate").innerText = `Estimated Pi: Simulating...`;
  document.getElementById("PiError").innerText = `Percentage Error: Simulating...`;
  numPicks = parseInt(inputVal) || 500;

  pick = 0;
  totalOn = 0;
  vertLines = [];

  if (sketchInstance) {
    sketchInstance.remove();
  }

  sketchInstance = new p5(sketch1, "sketch1");
}

const sketch1 = (p) => {
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(220);
    for (let i = 0; i < p.width / (toothpickLen * 2); i++) {
      let x = i * toothpickLen * 2;
      p.line(x, 0, x, p.height);
      vertLines.push(x);
    }
  };

  p.draw = function () {
    let randx = p.random(0, p.width);
    let randy = p.random(0, p.height);
    let randangle = p.random(0, p.PI);
    let randx2 = randx + toothpickLen * p.cos(randangle);
    let randy2 = randy + toothpickLen * p.sin(randangle);

    switch (p.floor(p.random(0, 7))) {
      case 0: p.stroke('red'); break;
      case 1: p.stroke('orange'); break;
      case 2: p.stroke('yellow'); break;
      case 3: p.stroke('green'); break;
      case 4: p.stroke('blue'); break;
      case 5: p.stroke('indigo'); break;
      case 6: p.stroke('violet'); break;
    }

    p.strokeWeight(2);
    p.line(randx, randy, randx2, randy2);

    let left = p.min(randx, randx2);
    let right = p.max(randx, randx2);

    for (let i = 0; i < vertLines.length; i++) {
      if (left <= vertLines[i] && vertLines[i] <= right) {
        totalOn++;
        break;
      }
    }

    pick++;
    if (pick >= numPicks) {
      p.noLoop();
      const piEstimate = (numPicks / totalOn);
      const error = (p.abs(piEstimate-p.PI)/p.PI)*100;
      document.getElementById("PiEstimate").innerText = `Estimated Pi: ${piEstimate.toFixed(5)}`;
      document.getElementById("PiError").innerText = `Percentage Error: ${error.toFixed(2)}%`;
      console.log("Estimated Pi:", piEstimate);
      console.log("Percentage Error:", error, "%");
    }
  };
};
