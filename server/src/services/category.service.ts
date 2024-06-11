import { CategoryDto } from "@/dto/category.dto";
import { CategoryRepository } from "@/repositories/category.repository";

export class CategoryService {
  private repository: CategoryRepository;

  constructor() {
    this.repository = new CategoryRepository();
  }

  async getCategories() {
    return await this.repository.getCategories();
  }

  async createCategory(categoryDto: CategoryDto) {
    return await this.repository.createCategory(categoryDto);
  }
}