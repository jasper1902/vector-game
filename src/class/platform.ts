import Character from "./character";
import Vector from "./vector";

export default class Platform {
  position: Vector;
  size: Vector;
  color: string;

  constructor(
    xPosition: number,
    yPosition: number,
    width: number,
    height: number,
    color: string
  ) {
    this.position = new Vector(xPosition, yPosition);
    this.size = new Vector(width, height);
    this.color = color;
  }

  isCollidingWith(character: Character): boolean {
    if (
      character.position.x < this.position.x + this.size.x &&
      character.position.x + character.size.x > this.position.x &&
      character.position.y < this.position.y + this.size.y &&
      character.position.y + character.size.y > this.position.y
    ) {
      if (character.velocity.y > 0) {
        character.velocity.y = 0;
        character.position.y = this.position.y - character.size.y - 1;
        character.stopMoving();
      } else if (character.velocity.y < 0) {
        character.velocity.y = 0;
        character.position.y = this.position.y + this.size.y + 1;
        character.stopMoving();
      } else if (character.velocity.x > 0) {
        character.velocity.x = 0;
        character.position.x = this.position.x - character.size.x - 1;
        character.stopMoving();
      } else if (character.velocity.x < 0) {
        character.velocity.x = 0;
        character.position.x = this.position.x + this.size.x + 1;
        character.stopMoving();
      }

      return true;
    }
    return false;
  }
}
