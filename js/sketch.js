import Fire from "./fire.js";
import Particle2 from "./particle2.js";
import Particle3 from "./particle3.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;

function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let particle = new Fire(mouseX, mouseY);
    particles.push(particle);
  }
}
function particle2Function() {
  for (let i = 0; i < 200; i++) {
    let particle = new Particle2(mouseX, mouseY);
    particles.push(particle);
  }
}
function particle3Function() {
  for (let i = 0; i < 100; i++) {
    let particle = new Particle3(mouseX, mouseY);
    particles.push(particle);
  }
}

window.addEventListener("keydown", particle2Function);
window.addEventListener("keyup", particle3Function);

window.mouseClicked = mouseClicked;
