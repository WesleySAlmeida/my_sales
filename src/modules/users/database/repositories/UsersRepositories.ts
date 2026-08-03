import { AppDataSource } from "@shared/typeorm/data-source";
import { User } from "../entities/User";


export const usersRepositories = AppDataSource.getRepository(User).extend({
  async findByName(name: string): Promise<User | null> {
    return this.findOneBy({ name });
  },

  async finByEmail(email: string): Promise<User | null> {
    return this.findOneBy({email});
  },

  async finById(id: number): Promise<User | null> {
    return this.findOneBy({ id });
  }
})
