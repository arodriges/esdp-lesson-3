import { ProductController } from '@/controllers/product.controller';
import { IRoute } from '@/interfaces/IRoute.interface';
import { upload } from '@/middlewares/upload';
import { Router } from 'express';

export class ProductRoute implements IRoute {
  public path = '/products';
  public router = Router();
  private controller: ProductController;

  constructor() {
    this.controller = new ProductController();
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getAllProducts);
    this.router.get('/:id', this.controller.getProduct);
    this.router.post('/create', upload.single('image'), this.controller.createProduct);
  }
}
