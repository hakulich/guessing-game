class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guessValue = Math.ceil((this.max - this.min) / 2 + this.min);

    return this.guessValue;
  }

  lower() {
    this.max = this.guessValue;
  }

  greater() {
    this.min = this.guessValue;
  }
}

module.exports = GuessingGame;
