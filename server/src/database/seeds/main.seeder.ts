import { Category } from "@/entities/category.entity";
import { Product } from "@/entities/product.entity";
import { User } from "@/entities/user.entity";
import { faker } from "@faker-js/faker";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class MainSeeder implements Seeder {
  async run(_: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const userFactory = factoryManager.get(User);
    const productFactory = factoryManager.get(Product);
    const categoryFactory = factoryManager.get(Category);

    await userFactory.saveMany(10);
    const categories = await categoryFactory.saveMany(3);
    
    await productFactory.saveMany(4, { category: faker.helpers.arrayElement(categories) });
    await productFactory.saveMany(4, { category: faker.helpers.arrayElement(categories) });
    await productFactory.saveMany(4, { category: faker.helpers.arrayElement(categories) });

  }
}