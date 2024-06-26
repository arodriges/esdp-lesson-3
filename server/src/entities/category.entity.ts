import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categories" })
export class Category {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    title!: string;

  @Column({ nullable: true})
    description?: string;
}