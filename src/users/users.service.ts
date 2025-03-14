import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      role: 'ADMIN',
      age: 30,
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'ENGINEER',
      age: 25,
    },
    {
      id: 3,
      name: 'Jane ',
      role: 'ENGINEER',
      age: 25,
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      const filteredUsers = this.users.filter((user) => user.role === role);
      if (!filteredUsers.length)
        throw new NotFoundException(`No user with role ${role} found`);
      return filteredUsers;
    }
    return this.users;
  }

  getOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    return user;
  }

  create(createUserDto: CreateUserDto) {
    if (createUserDto) {
      const newId = this.users.length + 1;
      const newUser = { ...createUserDto, id: newId };
      this.users.push(newUser);
      return newUser;
    }
    return {};
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const newList = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      } else {
        return user;
      }
    });
    this.users = newList;
    return this.getOne(id);
  }

  delete(id: number) {
    const removedUser = this.getOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
