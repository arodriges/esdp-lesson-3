import { CategoryFactory } from '@/database/factories/category.factory';
import { ProductFactory } from '@/database/factories/product.factory';
import { UserFactory } from '@/database/factories/user.factory';
import MainSeeder from '@/database/seeds/main.seeder';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: '77.243.81.95',
  port: 3306,
  username: 'admin',
  password: 'TUot/Y+C//xu3cMJeOzm/0M=',
  database: 'lesson_86',
  synchronize: false,
  logging: true,
  entities: ['src/entities/*{.ts,.js}'],
  seeds: [MainSeeder],
  factories: [UserFactory, ProductFactory, CategoryFactory]
};

export const appDataSource = new DataSource(options);
