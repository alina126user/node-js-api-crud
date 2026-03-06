import { users } from '../data/users.data';
import {User, UserResponse} from '../interfaces/user.type';
import { v4 as uuid } from 'uuid';
import { CreateUserDto, UpdatePasswordDto } from '../interfaces/user.type';

export class UsersService {
  getAllUsers(): User[] {
    return users;
  }

  getById(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  createUser(dto: CreateUserDto): UserResponse {
    const newUser = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...dto,
    };

    const { password, ...userWithoutPassword } = newUser;
    users.push(newUser);
    return userWithoutPassword;
  }

  updateUser(id: string, dto: UpdatePasswordDto): UserResponse | null {
    const user = users.find((u) => u.id === id);
    if (!user) return null;

    if (user.password !== dto.oldPassword) {
      throw new Error("Old password is incorrect");
    }

    user.password = dto.newPassword;

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  deleteUser(id: string): boolean {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}
