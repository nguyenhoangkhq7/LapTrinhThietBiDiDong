export class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  info(): string {
    return this.title + " - " + this.author;
  }
}
