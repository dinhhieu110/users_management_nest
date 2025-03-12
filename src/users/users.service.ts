import { Injectable } from '@nestjs/common';

export interface IUser {
  id?: number;
  name?: string;
  role?: string;
  age?: number;
}

@Injectable()
export class UsersService {
  private users: IUser[] = [
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
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  getOne(id?: number) {
    if (id) {
      return this.users.filter((user) => user.id === id);
    }
    return {};
  }

  create(user: IUser) {
    if (user) {
      const newId = this.users.length + 1;
      const newUser: IUser = { ...user, id: newId };
      this.users.push(newUser);
      return newUser;
    }
    return {};
  }

  update(id: number, updateUser: IUser) {
    const newList = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
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
