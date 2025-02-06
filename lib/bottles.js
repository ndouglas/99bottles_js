import { downTo } from './helpers';

class Bottles {

  song() {
    return this.verses(99, 0);
  }

  verses(a, b) {
    return downTo(a, b)
      .map((num) => this.verse(num))
      .join('\n');
  }

  verse(num) {
    switch (num) {
      case 0:
        return `No more bottles of beer on the wall, `
          + `no more bottles of beer.\n`
          + `Go to the store and buy some more, `
          + `99 bottles of beer on the wall.\n`;
      default:
        return `${num} ${this.container(num)} of beer on the wall, `
          + `${num} ${this.container(num)} of beer.\n`
          + `Take ${this.pronoun(num)} down and pass it around, `
          + `${this.quantity(num - 1)} ${this.container(num - 1)} of beer on the wall.\n`;
    }
  }

  quantity(num) {
    if (num === 0) {
      return 'no more';
    }
    else {
      return num;
    }
  }

  pronoun(num) {
    if (num === 1) {
      return 'it';
    }
    else {
      return 'one';
    }
  }

  container(num) {
    if (num === 1) {
      return 'bottle';
    }
    else {
      return 'bottles';
    }
  }

}

export {
  Bottles,
};