import { Animal } from './Animal';

export class Cachorro extends Animal {
  emitirSom(): string {
    const audio = new Audio('assets/latido.mp3');
    audio.play();
    return 'Au au!';
  }

  correr() {
    return `${this.getNome()} está correndo!`;
  }
}