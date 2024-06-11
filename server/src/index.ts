import cors from 'cors';
import App from './app';
import logger from './middlewares/logger';
import { ArticleRoute } from './routes/article.route';
import { ProductRoute } from './routes/product.route';
import { CategoryRoute } from './routes/category.route';
import { AuthRoute } from './routes/auth.route';

const app = new App({
  port: 8000,
  middlewares: [logger(), cors({
    exposedHeaders: 'Authorization',
  })],
  controllers: [
    new ArticleRoute(), 
    new ProductRoute(), 
    new CategoryRoute(),
    new AuthRoute()
  ],
});

app.listen();
