import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUsersService from "../services/ListUsersService";
import { instanceToInstance } from "class-transformer";


export default class UsersControllers {
   async index(request: Request, response: Response): Promise<Response> {
    const listUserSService = new ListUsersService();
    const users = await listUserSService.execute();
    return response.json(instanceToInstance(users));
   }


  async create(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({name, email, password});
    return response.json(instanceToInstance(user));
  }

}
