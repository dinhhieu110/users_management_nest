import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
