export default class InputController {
  constructor(scene) {
    this.left = false;
    this.right = false;
    this.jump = false;

    // teclado (desktop)
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    // teclado
    this.left = this.cursors.left.isDown;
    this.right = this.cursors.right.isDown;
    this.jump = Phaser.Input.Keyboard.JustDown(this.cursors.up);
  }

  // mobile
  pressLeft(isDown) {
    this.left = isDown;
  }

  pressRight(isDown) {
    this.right = isDown;
  }

  pressJump() {
    this.jump = true;
  }

  resetJump() {
    this.jump = false;
  }
}
