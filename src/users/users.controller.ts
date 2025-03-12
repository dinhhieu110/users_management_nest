import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() // Get /users or /users?role=value&age=anotherValue
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id') // Get /users/:id
  getOne(@Param('id') id: string) {
    return { id };
  }

  @Get('interns')
  findAllInterns(@Param('id') id: string) {
    return [];
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
