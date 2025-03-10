import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookId = +id;
    return this.booksService.getBookById(bookId);
  }

  @Post()
  // Partial to avoid requiring ID in body of request
  addBook(@Body() book: Partial<Book>): Book {
    return this.booksService.create(book);
  }

  @Put(':id')
  editBook(@Param('id') id: string, @Body() book: Partial<Book>): Book {
    return this.booksService.update(+id, book);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Book[] {
    return this.booksService.delete(+id);
  }
}
