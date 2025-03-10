import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    // Normally, this will query or handle mongoose to get data...
    return books;
  }
  getBookById(bookId): Book | undefined {
    return books.find((book) => book.id === bookId);
  }
  create(book: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1;
    const newBook = { ...book, id: newId } as Book;
    books.push(newBook);
    return newBook;
  }
  update(bookId: number, book: Partial<Book>): Book {
    const currentBook = books.find((book) => book.id === bookId);
    const updatedBook = { ...currentBook, ...book } as Book;
    books[bookId - 1] = updatedBook;

    return updatedBook;
  }
  delete(bookId: number): Book[] {
    // const newList = books.filter((book) => book.id !== bookId);
    books.splice(bookId - 1, 1);
    return books;
  }
}
