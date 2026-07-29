import AppError from "@shared/errors/AppError";
import { Product } from "../database/entities/Product";
import { productsRepositories } from "../database/repositories/ProductsRepositories";

interface IUpdateProduct {
  name: string;
  id: string;
  quantity: number;
  price: number;
}


export default class UpdatedProductService {
  async execute({name, id, quantity, price}: IUpdateProduct): Promise<Product> {
    const product = await productsRepositories.findById(id);

    if(!product) {
      throw new AppError('Product is not found', 404);
    }

    const productExists = await productsRepositories.findByName(name);

    if(productExists) {
      throw new AppError('There is alredy one product with this name', 409);
    }


    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepositories.save(product);

    return product;

  }
}
