import { capitalize, downTo } from './helpers';

class Bottles {

  constructor(verseTemplate = BottleVerse) {
    this.verseTemplate = verseTemplate;
  }

  song() {
    return this.verses(99, 0);
  }

  verses(a, b) {
    return downTo(a, b)
      .map((number) => this.verse(number))
      .join('\n');
  }

  verse(number) {
    return new this.verseTemplate(number).lyrics();
  }

}

class BottleVerse {

  constructor(number) {
    this.number = number;
  }

  lyrics() {
    const bottleNumber = BottleNumber.for(this.number);
    return capitalize(`${bottleNumber} of beer on the wall, `)
      + `${bottleNumber} of beer.\n`
      + `${bottleNumber.action()}, `
      + `${bottleNumber.successor()} of beer on the wall.\n`;
  }

}

class BottleNumber {

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find(candidate => candidate.canHandle(number));
    return new bottleNumberClass(number);
  }

  static canHandle(_number) {
    return true;
  }

  constructor(number) {
    this.number = number;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }

  quantity() {
    return this.number.toString();
  }

  container() {
    return 'bottles';
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  pronoun() {
    return 'one';
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

}

BottleNumber.registry = [BottleNumber];

class BottleNumber0 extends BottleNumber {

  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return 'no more';
  }

  action() {
    return `Go to the store and buy some more`;
  }

  successor() {
    return BottleNumber.for(99);
  }

}

BottleNumber.register(BottleNumber0);

class BottleNumber1 extends BottleNumber {

  static canHandle(number) {
    return number === 1;
  }

  container() {
    return 'bottle';
  }

  pronoun() {
    return 'it';
  }

}

BottleNumber.register(BottleNumber1);

class BottleNumber6 extends BottleNumber {

  static canHandle(number) {
    return number === 6;
  }

  quantity() {
    return '1';
  }

  container() {
    return 'six-pack';
  }

}

BottleNumber.register(BottleNumber6);

export {
  Bottles,
};