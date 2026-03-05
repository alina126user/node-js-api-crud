import { users } from '../data/users.data';
import { User } from '../interfaces/user.type';
import { v4 as uuid } from 'uuid';
import { CreateUserDto, UpdatePasswordDto } from '../interfaces/user.type';

export class UsersService {
  getAllUsers(): User[] {
    return users;
  }

  getById(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  createUser(dto: CreateUserDto): User {
    const newUser = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...dto,
    };

    users.push(newUser);
    return newUser;
  }

updateUser(id: string, dto: UpdatePasswordDto): User | null {
  const user = users.find((u) => u.id === id);
  if (!user) return null;

  if (user.password !== dto.oldPassword) {
    throw new Error("Old password is incorrect");
  }

  user.password = dto.newPassword;

  return user;
}

  deleteUser(id: string): boolean {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}
