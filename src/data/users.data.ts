import { User } from '../interfaces/user.type';
import { v4 as uuid } from 'uuid';

export const users: User[] = [
  {
    id: uuid(),
    password: 'password123',
    createdAt: Date.now() - 1,
    version: 1,
    updatedAt: Date.now(),
    login: 'Alina1',
  },
  {
    id: uuid(),
    password: '123456',
    createdAt: Date.now() - 1 ,
    version: 1,
    updatedAt: Date.now(),
    login: 'Alina2',
  },
];
