import { Expose } from "class-transformer";

export class CategoryDto {
  @Expose() title!: string;

  @Expose() description?: string;
}