import Particle from "./particle.js";

export default class Particle3 extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x + Math.random() * 1000;
    this.y = this.y + Math.random() * 1000;
    this.velocity = 0.2 + Math.random();
    this.life = 0;
    this.maxLife = 60 + Math.floor(Math.random() * 100);
  }

  update() {
    this.y = this.y - this.velocity;
    this.velocity = this.velocity * 0.99;
    this.life = this.life + 0.01;
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 1);
    pop();
  }

  isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}
