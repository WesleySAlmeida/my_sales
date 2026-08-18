import { IPagination } from "@shared/interfaces/pagination.interface";
import { Customer } from "../database/entities/Customer";
import { customerRepository } from "../database/repositories/CustomerRepositories";


export default class ListCustomersService {
  async execute(page: number = 1, limite: number = 10): Promise<IPagination<Customer>> {
    const [data, total] = await customerRepository.findAndCount({
      take: limite,
      skip: (page - 1) * 10,
    });

    const totalPages = Math.ceil(total / limite)

    return {
      data,
      total,
      per_page: limite,
      current_page: page,
      total_pages: totalPages,
      next_page: page < totalPages ? + 1 : null,
      prev_page: page > 1 ? page - 1 : null
    } as IPagination<Customer>
  }
}
