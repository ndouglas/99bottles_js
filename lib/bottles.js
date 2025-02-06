import { downTo } from './helpers';

class Bottles {

  __constructor() {

  }

  verse(num) {
    switch (num) {
      case 2:
        return `2 bottles of beer on the wall, `
          + `2 bottles of beer.\n`
          + `Take one down and pass it around, `
          + `1 bottle of beer on the wall.\n`;
      case 1:
        return `1 bottle of beer on the wall, `
          + `1 bottle of beer.\n`
          + `Take it down and pass it around, `
          + `no more bottles of beer on the wall.\n`;
      case 0:
        return `No more bottles of beer on the wall, `
          + `no more bottles of beer.\n`
          + `Go to the store and buy some more, `
          + `99 bottles of beer on the wall.\n`;
      default:
        return `${num} bottles of beer on the wall, `
          + `${num} bottles of beer.\n`
          + `Take one down and pass it around, `
          + `${num - 1} bottles of beer on the wall.\n`;
    }
  }

  verses(a, b) {
    return `${this.verse(a)}\n${this.verse(b)}`;
  }

}

export {
  Bottles,
};