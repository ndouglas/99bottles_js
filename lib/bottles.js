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
          + `${num - 1} ${this.container(num - 1)} of beer on the wall.\n`;
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