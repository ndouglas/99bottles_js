import { capitalize, downTo } from './helpers';

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
    return `${capitalize(this.quantity(num))} ${this.container(num)} of beer on the wall, `
      + `${this.quantity(num)} ${this.container(num)} of beer.\n`
      + `${this.action(num)}, `
      + `${this.quantity(this.successor(num))} ${this.container(this.successor(num))} of beer on the wall.\n`;
  }

  successor(num) {
    if (num === 0) {
      return 99;
    }
    else {
      return num - 1;
    }
  }

  action(num) {
    if (num === 0) {
      return `Go to the store and buy some more`;
    }
    else {
      return `Take ${this.pronoun(num)} down and pass it around`;
    }
  }

  quantity(num) {
    if (num === 0) {
      return 'no more';
    }
    else {
      return num.toString();
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