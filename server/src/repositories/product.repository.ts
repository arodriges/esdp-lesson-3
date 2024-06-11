import { appDataSource } from "@/config/dataSource";
// import { getDb } from "@/config/mysqlDB";
import { ProductDto } from "@/dto/product.dto";
import { Product } from "@/entities/product.entity";
// import { IProduct } from "@/interfaces/IProduct.interface";
// import { ResultSetHeader } from "mysql2";
import { Repository } from "typeorm";


// interface IProductData extends ResultSetHeader, IProduct {}

export class ProductRepository extends Repository<Product> {
  constructor() {
    super(Product, appDataSource.createEntityManager());
  }

  async getProducts(): Promise<Product[]> {
    return await this.find({ relations: { category: true, user: true }});
  }

  async getProduct(id: number) {
    return await this.findOne({ where:{ id }, relations: { category: true } });
  }

  async createProduct(productDto: ProductDto, userId: number) {
    return await this.save({...productDto, userId });
  }
}