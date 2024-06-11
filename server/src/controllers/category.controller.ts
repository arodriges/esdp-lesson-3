import { plainToInstance } from "class-transformer";
import { RequestHandler } from "express";
import { CategoryDto } from "@/dto/category.dto";
import { CategoryService } from "@/services/category.service";

export class CategoryController {
  private service: CategoryService;

  constructor() {
    this.service = new CategoryService();
  }

  getCategories: RequestHandler = async (_, res): Promise<void> => {
    const categories = await this.service.getCategories();
    res.send(categories);
  };

  createCategory: RequestHandler = async (req, res): Promise<void> => {
    const categoryDto = plainToInstance(CategoryDto, req.body);
    const category = await this.service.createCategory(categoryDto);
    res.send(category);
  };
}