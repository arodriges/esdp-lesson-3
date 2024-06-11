import { ProductService } from '@/services/product.service';
import { RequestHandler } from 'express';
import { plainToInstance } from 'class-transformer';
import { ProductDto } from '@/dto/product.dto';
import { AuthService } from '@/services/auth.service';

export class ProductController {
  private service: ProductService;
  private authService: AuthService;

  constructor() {
    this.service = new ProductService();
    this.authService = new AuthService();
  }

  getAllProducts: RequestHandler = async (req, res) => {
    const products = await this.service.getAllProducts();
    return res.send(products);
  };

  getProduct: RequestHandler = async (req, res): Promise<void> => {
    try {
      const product = await this.service.getProduct(parseInt(req.params.id, 10));
      res.send(product);
    } catch(e) {
      res.status(400).send({ message: 'Product not found', detailedMessage: (e as Error)?.message});
    }
  };

  createProduct: RequestHandler = async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ error: { message: 'No token present' } });
    }
    const user = await this.authService.getUserByToken(token);
    if (!user) {
      return res.status(401).send({ error: { message: 'Wrong token' } });
    }
    try {
      const productDto = plainToInstance(ProductDto, req.body);
      if (req.file) {
        productDto.image = req.file.filename;
      }
      const product = await this.service.createProduct(productDto, user.id);
      return res.send(product);
    } catch(e) {
      if (Array.isArray(e)) {
        console.log(e);
        return res.status(400).send(e);
      } else {
        return res.status(500).send(e);
      }
    }
  };
}
