export default class InputController {
  constructor(scene) {
    // estados finais usados pelo Player
    this.left = false;
    this.right = false;
    this.jump = false;

    // estados mobile
    this.mobileLeft = false;
    this.mobileRight = false;
    this.mobileJump = false;

    // teclado
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    // teclado
    const keyboardLeft = this.cursors.left.isDown;
    const keyboardRight = this.cursors.right.isDown;
    const keyboardJump = Phaser.Input.Keyboard.JustDown(this.cursors.up);

    // combina teclado + mobile
    this.left = keyboardLeft || this.mobileLeft;
    this.right = keyboardRight || this.mobileRight;

    this.jump = keyboardJump || this.mobileJump;

    // 🔑 jump mobile é pulso (1 frame)
    this.mobileJump = false;
  }

  // ───────── MOBILE ─────────

  pressLeft(isDown) {
    this.mobileLeft = isDown;
  }

  pressRight(isDown) {
    this.mobileRight = isDown;
  }

  pressJump() {
    this.mobileJump = true;
  }
}
