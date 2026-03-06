export interface User {
id: string; // uuid v4
login: string;
password: string;
version?: number; // integer number, increments on update
createdAt: number; // timestamp of creation
updatedAt?: number; // timestamp of last update
}
export type UserResponse = Omit<User, 'password'>

export interface CreateUserDto {
  login: string;
  password: string;
 }

export interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}
