import { IProduct } from '@/interfaces/IProduct.interface';
import path from 'path';
import * as fs from 'fs';
import { ProductDto } from '@/dto/product.dto';
import { ProductRepository } from '@/repositories/product.repository';
import { Product } from '@/entities/product.entity';
import { validate } from 'class-validator';
import { formatErrors } from '@/helpers/formatErrors';

const filePath = path.join(__dirname, '../../data');

export class ProductService {
  private products: IProduct[] = [];
  private repository: ProductRepository;

  constructor() {
    this.init();
    this.repository = new ProductRepository();
  }

  init(): void {
    try {
      const fileContent = fs.readFileSync(`${filePath}/products.json`);
      this.products = JSON.parse(fileContent.toString());
    } catch (e) {
      this.products = [];
    }
  }

  save(): void {
    fs.writeFileSync(`${filePath}/products.json`, JSON.stringify(this.products, null, 2));
  }

  getAllProducts = async (): Promise<Product[]> => {
    const res = await this.repository.getProducts();
    return res;
  };

  getProduct = async (id: number): Promise<Product> => {
    const product = await this.repository.getProduct(id);
    if (!product){
      throw new Error('Invalid id');
    }
    return product;
  };

  createProduct = async (data: ProductDto, userId: number): Promise<Product> => {
    const errors = await validate(data, {
      whitelist: true, 
      validationError:{value: false, target: false}
    });
    if (errors?.length) {
      throw formatErrors(errors);
    }
    return await this.repository.createProduct(data, userId);
  };
}
