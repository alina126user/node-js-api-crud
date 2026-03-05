import { Request, Response, NextFunction } from 'express';
import { UsersService } from '../services/usersService';
import { CreateUserDto, UpdatePasswordDto } from '../interfaces/user.type';


const usersService = new UsersService();

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = usersService.getById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
      }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = usersService.getAllUsers();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = (req: Request<{}, {}, CreateUserDto>, res: Response, next: NextFunction)=> {
  try {
    const user = usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = (req: Request<{id: string}, {}, UpdatePasswordDto>, res: Response, next: NextFunction)=> {
 try {
    const user = usersService.updateUser(req.params.id, req.body);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser =  (req: Request<{id: string}>, res: Response, next: NextFunction)=> {
  try {
    const user = usersService.deleteUser(req.params.id);

      if (!user) {
      return res.status(404).json({ message: "User not found" });
      }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
