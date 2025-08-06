import { Animal } from './Animal';

export class Cachorro extends Animal {
  emitirSom(): string {
    return 'Au au!';
  }

  correr() {
    return `${this.getNome()} está correndo!`;
  }
}