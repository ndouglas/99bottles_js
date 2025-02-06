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
    }
  }
}

export {
  Bottles,
};