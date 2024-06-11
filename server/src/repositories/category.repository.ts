import { Repository } from "typeorm";
import { appDataSource } from "@/config/dataSource";
import { Category } from "@/entities/category.entity";
import { CategoryDto } from "@/dto/category.dto";

export class CategoryRepository extends Repository<Category> {
  constructor() {
    super(Category, appDataSource.createEntityManager());
  }

  async getCategories(): Promise<Category[]> {
    return await this.find();
  }

  async createCategory(categoryDto: CategoryDto) {
    const category = new Category();
    category.title = categoryDto.title;
    category.description = categoryDto.description;
    await this.save(category);

    return category;
  }
}