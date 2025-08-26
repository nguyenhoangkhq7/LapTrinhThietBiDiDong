export class Book {
  constructor(private title: string) {}

  info(): string {
    return this.title;
  }
}
