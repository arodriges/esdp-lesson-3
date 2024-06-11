import { Product } from "@/entities/product.entity";
import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";

export const ProductFactory = setSeederFactory(Product, (faker: Faker) => {
  const product = new Product();
  product.title = faker.commerce.productName();
  product.price = faker.number.int({ min: 100, max: 2000 });
  product.description = faker.lorem.sentence();
  product.image = faker.image.url();
  return product;
});