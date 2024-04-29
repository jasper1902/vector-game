import Vector from "./vector";

export default class Character {
  speed: number;
  position: Vector;
  velocity: Vector;
  acceleration: Vector;
  jumpForce: number;
  isJumping: boolean;
  size: Vector;

  constructor(width: number, height: number) {
    this.position = new Vector(100, 100);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
    this.jumpForce = 0.2;
    this.isJumping = false;
    this.speed = 0.005;
    this.size = new Vector(width, height);
  }

  updatePosition(canvas: HTMLCanvasElement) {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    if (this.position.x < 0) {
      this.position.x = 0;
    } else if (this.position.x > canvas?.width - this.size.x) {
      this.position.x = canvas?.width - this.size.x;
    }

    if (this.position.y < 0) {
      this.position.y = 0;
    } else if (this.position.y > canvas?.height - this.size.y) {
      this.position.y = canvas?.height - this.size.y;
    }
  }

  applyForce(force: Vector) {
    this.acceleration.add(force);
  }

  jump() {
    this.applyForce(new Vector(0, -this.jumpForce * this.speed));
  }

  down() {
    this.applyForce(new Vector(0, this.jumpForce * this.speed));
  }

  moveLeft() {
    this.applyForce(new Vector(-0.2 * this.speed, 0));
  }

  moveRight() {
    this.applyForce(new Vector(0.2 * this.speed, 0));
  }

  stopMoving() {
    this.acceleration.x = 0;
    this.acceleration.y = 0;
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.isJumping = false;
  }
}
