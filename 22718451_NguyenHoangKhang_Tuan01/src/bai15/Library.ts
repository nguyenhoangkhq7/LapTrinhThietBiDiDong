import type { Book } from "./Book.js";
import type { User } from "./User.js";

export class Library {
  private books: Book[] = [];
  private users: User[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
}
