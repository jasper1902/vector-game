export default class InputHandler {
  isLeftKeyPressed: boolean;
  isRightKeyPressed: boolean;
  isSpaceKeyPressed: boolean;
  isDownKeyPressed: boolean;

  constructor() {
    this.isLeftKeyPressed = false;
    this.isRightKeyPressed = false;
    this.isSpaceKeyPressed = false;
    this.isDownKeyPressed = false;

    document.addEventListener(
      "keydown",
      (event) => this.handleKeyDown(event),
      false
    );
    document.addEventListener(
      "keyup",
      (event) => this.handleKeyUp(event),
      false
    );
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "a" || event.key === "ฟ") {
      this.isLeftKeyPressed = true;
    } else if (event.key === "d" || event.key === "ก") {
      this.isRightKeyPressed = true;
    } else if (event.key === "w" || event.key === " " || event.key === "ไ") {
      this.isSpaceKeyPressed = true;
    } else if (event.key === "s" || event.key === "ห") {
      this.isDownKeyPressed = true;
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === "a" || event.key === "ฟ") {
      this.isLeftKeyPressed = false;
    } else if (event.key === "d" || event.key === "ก") {
      this.isRightKeyPressed = false;
    } else if (event.key === "w" || event.key === " " || event.key === "ไ") {
      this.isSpaceKeyPressed = false;
    } else if (event.key === "s" || event.key === "ห") {
      this.isDownKeyPressed = false;
    }
  }
}
