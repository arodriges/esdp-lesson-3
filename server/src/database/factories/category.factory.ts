import { Category } from "@/entities/category.entity";
import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";

export const CategoryFactory = setSeederFactory(Category, (faker: Faker) => {
  const category = new Category();
  category.title = faker.commerce.department();
  category.description = faker.lorem.sentence();
  return category;
});