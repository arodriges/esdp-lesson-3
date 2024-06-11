import bcrypt from "bcrypt";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('users')
@Unique(['username'])
export class User {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column()
    username!: string;

  @Column({ nullable: true })
    displayName?: string;

  @Column()
    password!: string;

  @Column({nullable: true})
    token?: string;

  public async comparePassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }

  public generateToken() {
    this.token = crypto.randomUUID();
  }
}