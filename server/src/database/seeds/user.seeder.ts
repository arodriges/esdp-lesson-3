import { User } from "@/entities/user.entity";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class UserSeeder implements Seeder {
  async run(_: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
    const userFactory = factoryManager.get(User);
    await userFactory.saveMany(10);
  }
}