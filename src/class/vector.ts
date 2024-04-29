export default class Vector {
  constructor(public x: number, public y: number) {}

  add(otherVector: Vector): Vector {
    this.x += otherVector.x;
    this.y += otherVector.y;
    return this;
  }

  subtract(otherVector: Vector): Vector {
    this.x -= otherVector.x;
    this.y -= otherVector.y;
    return this;
  }

  multiply(scalar: number): Vector {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  divide(scalar: number): Vector {
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  calculateMagnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize(): Vector {
    const magnitude = this.calculateMagnitude();
    if (magnitude === 0) {
      this.x = 0;
      this.y = 0;
    } else {
      this.divide(magnitude);
    }
    return this;
  }
}
