import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { IUser } from '../models/user';

class UserController {
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    console.log('getAllUsers');
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const users = await userService.getAllUsers();
      const mockUserData = {
        name: 'John Doe',
        age: 29,
        city: 'New York',
      };
      //res.json(users);
      res.json(mockUserData);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unexpected error');
      }
    }
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    try {
      //const user = await userService.getUserById(req.params.id);
      const user = {
        name: 'John Doe',
        age: 33,
        city: 'New York',
      };
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unexpected error');
      }
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user: IUser = req.body;
      const newUser = await userService.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unexpected error');
      }
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const updatedUser = req.body;
      const user = await userService.updateUser(req.params.id, updatedUser);
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unexpected error');
      }
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (user) {
        res.status(204).send();
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send('Unexpected error');
      }
    }
  }
}

export const userController = new UserController();
