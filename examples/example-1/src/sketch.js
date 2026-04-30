let data;

async function setup() {
  data = await loadSomething();
  createCanvas(400, 400);

  console.log(myAddonVariable); // Should log 'some value'
}

function draw() {
  background(200);
  drawSomething();
}