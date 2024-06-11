import { Router } from "express";
import { CategoryController } from "@/controllers/category.controller";
import { IRoute } from "@/interfaces/IRoute.interface";

export class CategoryRoute implements IRoute {
  public path = "/categories";
  public router = Router();
  private controller: CategoryController;

  constructor() {
    this.controller = new CategoryController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getCategories);
    this.router.post('/create', this.controller.createCategory);
  }
}