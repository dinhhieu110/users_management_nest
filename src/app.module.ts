import { Module } from '@nestjs/common';
import { BooksController } from './app.controller';
import { BooksService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
