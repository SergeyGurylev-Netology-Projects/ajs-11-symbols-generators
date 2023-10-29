export default class Team {
  *[Symbol.iterator]() {
    for (const item of this.participants) {
      yield item;
    }
  }

  constructor() {
    this.participants = [];
  }

  add(character) {
    this.participants.push(character);
  }
}
