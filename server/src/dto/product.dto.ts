import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsNumberString } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({message: "Продукт не может быть создан без названия"})
  @IsString({message: "Название должно быть строкой"})
  @Expose() 
    title!: string;

  @IsOptional()
  @Expose() 
    description?: string;

  @IsNotEmpty({message: "Укажите цену продукта"})  
  @IsNumberString({}, {message: "Укажите корректную цену"})
  @Expose() 
    price!: number;

  @IsOptional()
  @Expose() 
    image?: string;

  @IsNotEmpty({message: "Не указана категория товара"}) 
  @IsNumberString({}, {message: "Укажите корректную категорию"})
  @Expose() 
    categoryId!: number;
}
