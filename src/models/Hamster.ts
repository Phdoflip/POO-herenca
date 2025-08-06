import { Animal } from './Animal';

export class Hamster extends Animal {
  emitirSom(): string {
    const audio = new Audio('assets/ric.mp3');
    audio.play();
    return 'ric ric!';
  }

  ComerSemente() {
    return `${this.getNome()} Hmm... estou de barriga cheia!`;
  }
}