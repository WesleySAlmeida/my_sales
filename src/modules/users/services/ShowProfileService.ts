import AppError from "@shared/errors/AppError";
import { User } from "../database/entities/User";
import { usersRepositories } from "../database/repositories/UsersRepositories";

interface IShowProfileRequest {
  user_id: number;
}

export default class ShowProfileService {
  public async execute({user_id}: IShowProfileRequest): Promise<User> {
    const user = await usersRepositories.findById(user_id)

    if(!user) {
      throw new AppError('User is not found', 404);
    }

    return user;
  }
}
