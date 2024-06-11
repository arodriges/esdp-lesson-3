import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterUserDto {
  @Expose()
  @IsString({message: "Пароль должен быть строкой"})
  @IsNotEmpty({message: "Укажите пароль"})  
    password!: string;
  
  @Expose()
  @IsString({message: "Имя пользователя должно быть строкой"})
  @IsNotEmpty({message: "Укажите имя пользователя"})  
    username!: string;

  @Expose()
  @IsString({message: "Псевдоним должен быть строкой"})
  @IsOptional()  
    displayName?: string;
}