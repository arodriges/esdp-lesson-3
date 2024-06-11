import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { Category } from "./category.entity";
import { User } from "./user.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    title!: string;

  @Column()
    price!: number;

  @Column({ nullable: true })
    description?: string;

  @Column({ nullable: true })
    image?: string;

  @Column({ nullable: true })
    userId?: number;

  @Column()
    categoryId!: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "categoryId"})
    category!: Category;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId"})
    user!: User;
}