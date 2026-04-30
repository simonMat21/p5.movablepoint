import p5 from "https://cdn.jsdelivr.net/npm/p5@2.0.3/lib/p5.esm.js";
import { movablePoints } from "../../../dist/movablePoints.esm.js";

p5.registerAddon(movablePoints);

const sketch = function (p) {
  let handles;

  p.setup = async function () {
    p.createCanvas(400, 400);

    handles = [
      new p5.MovablePoint(90, 110, 120),
      new p5.MovablePoint(210, 90, 12),
      new p5.MovablePoint(160, 230, 100),
    ];
  };

  p.draw = function () {
    p.background(200);

    p.textSize(15);
    p.noStroke();
    p.text("click on any of the objects and move it", 85, 300);

    p.checkClicked(handles);

    const pA = handles[0].getPosition();
    const pB = handles[1].getPosition();
    const pC = handles[2].getPosition();

    p.push();
    p.stroke(0);
    p.line(pA[0], pA[1], pB[0], pB[1]);
    p.line(pA[0], pA[1], pC[0], pC[1]);
    p.line(pC[0], pC[1], pB[0], pB[1]);
    p.ellipse(pA[0], pA[1], 15);
    p.ellipse(pB[0], pB[1], 15);
    p.ellipse(pC[0], pC[1], 15);

    p.drawSomething();
  };
};

new p5(sketch);
