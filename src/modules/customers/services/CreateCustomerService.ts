import AppError from "@shared/errors/AppError";
import { Customer } from "../database/entities/Customer";
import { customerRepository } from "../database/repositories/CustomerRepositories";

interface ICreateCustomer {
  name: string;
  email: string;
}

export default class CreateCustomerService {
  async execute({name, email}: ICreateCustomer):Promise <Customer> {
    const emailExists = await customerRepository.findByEmail(email);

    if(emailExists) {
      throw new AppError('Email address alredy used', 409);
    }

    const customer = await customerRepository.create({name, email})

    await customerRepository.save(customer);

    return customer;
  }
}
