import { downTo } from './helpers';

class Bottles {

  __constructor() {

  }

  verse(num) {
    if (num > 2) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n`
        + `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
    } else if (num == 2) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n`
        + `Take one down and pass it around, ${num - 1} bottle of beer on the wall.\n`;
    } else if (num == 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n`
        + `Take it down and pass it around, no more bottles of beer on the wall.\n`;
    } else if (num == 0) {
      return `No more bottles of beer on the wall, no more bottles of beer.\n`
        + `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }
  }

  verses(a, b) {
    let result = '';
    for (let i = a; i >= b; i--) {
      result += this.verse(i) + '\n';
    }
    return `${result.trim()}\n`;
  }

  song() {
    return this.verses(99, 0);
  }
}

export {
  Bottles,
};