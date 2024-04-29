import Character from "./class/character";
import Platform from "./class/platform";
import InputHandler from "./class/inputHandler";

const character = new Character(20, 20);
const platforms: Platform[] = [];
const inputHandler = new InputHandler();
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const platformColors: string[] = [];

function getRandomColorHex() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  platformColors.push(`#${red}${green}${blue}`);
}

function randomPlatforms() {
  const gridSize = 200;
  const rows = Math.floor(canvas.height / gridSize);
  const cols = Math.floor(canvas.width / gridSize);
  for (let i = 0; i < rows * cols; i++) {
    getRandomColorHex();
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (Math.random() > 0.7) {
        const x = j * gridSize;
        const y = i * gridSize;
        const width = (gridSize * (Math.random() * 2 + 1)) / 4;
        const height = (gridSize * (Math.random() * 2 + 1)) / 5;
        const color =
          platformColors[Math.floor(Math.random() * platformColors.length)];
        platforms.push(new Platform(x, y, width, height, color));
      }
    }
  }
}

function gameLoop() {
  ctx?.clearRect(0, 0, canvas?.width, canvas?.height);

  character.updatePosition(canvas);

  if (inputHandler.isRightKeyPressed && inputHandler.isSpaceKeyPressed) {
    character.moveRight();
    character.jump();
  } else if (inputHandler.isRightKeyPressed && inputHandler.isDownKeyPressed) {
    character.moveRight();
    character.down();
  } else if (inputHandler.isLeftKeyPressed && inputHandler.isSpaceKeyPressed) {
    character.moveLeft();
    character.jump();
  } else if (inputHandler.isLeftKeyPressed && inputHandler.isDownKeyPressed) {
    character.moveLeft();
    character.down();
  } else if (inputHandler.isLeftKeyPressed) {
    character.moveLeft();
  } else if (inputHandler.isRightKeyPressed) {
    character.moveRight();
  } else if (inputHandler.isSpaceKeyPressed) {
    character.jump();
  } else if (inputHandler.isDownKeyPressed) {
    character.down();
  } else {
    character.stopMoving();
  }

  if (ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      character.position.x,
      character.position.y,
      character.size.x,
      character.size.y
    );

    platforms.forEach(
      (platform: {
        color: string | CanvasGradient | CanvasPattern;
        isCollidingWith(character: Character): boolean;
        position: { x: number; y: number };
        size: { x: number; y: number };
      }) => {
        ctx.fillStyle = platform.color;
        ctx.fillRect(
          platform.position.x,
          platform.position.y,
          platform.size.x,
          platform.size.y
        );
        platform.isCollidingWith(character);
      }
    );
  }
  requestAnimationFrame(gameLoop);
}
randomPlatforms();
requestAnimationFrame(gameLoop);
