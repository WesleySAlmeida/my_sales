import { Request, Response } from "express";
import { usersRepositories } from "../database/repositories/UsersRepositories";
import ShowProfileService from "../services/ShowProfileService";
import UpdatedProfileService from "../services/UpdateProfileService";

export default class ProfileControllers {
  public async show(request:Request, response: Response): Promise<Response> {
    const showProfile = new ShowProfileService();
    const user_id = Number(request.user.id);

    const user = await showProfile.execute({user_id})
    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);
    const {password, old_password, name, email} = request.body;

    const updateProfile = new UpdatedProfileService();
    const user = await updateProfile.execute({
      user_id,
      password,
      name,
      email,
      old_password
    })

    return response.json(user)
  }
}
