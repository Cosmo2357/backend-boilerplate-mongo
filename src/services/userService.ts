import User, { IUser } from '../models/user';

class UserService {
  public async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  public async getUserById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  public async createUser(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    return newUser.save();
  }

  public async updateUser(
    id: string,
    updatedUser: Partial<IUser>,
  ): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, updatedUser, { new: true });
  }

  public async deleteUser(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }
}

export const userService = new UserService();
