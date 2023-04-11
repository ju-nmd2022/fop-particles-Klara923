import Particle from "./particle.js";

export default class Particle2 extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x;
    this.velocity = 0.2 + Math.random();
    this.life = 0;
    this.maxLife = 60 + Math.floor(Math.random() * 100);
  }

  update() {
    this.y = this.y - this.velocity;
    this.velocity = this.velocity * 0.99;
    this.life = this.life + 2;
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    colorMode(HSL);
    fill(random(0, 255), 50, 50);
    ellipse(0, 0, 6);
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
