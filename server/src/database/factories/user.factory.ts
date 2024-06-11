import { RegisterUserDto } from "@/dto/register-user.dto";
import { User } from "@/entities/user.entity";
import { UserRepository } from "@/repositories/user.repository";
import { Faker } from "@faker-js/faker";
import {setSeederFactory} from "typeorm-extension";

export const UserFactory = setSeederFactory(User, (faker: Faker) => {
  const userRepository = new UserRepository();
  const registerUserDto: RegisterUserDto = {
    username: faker.internet.userName(),
    displayName: faker.person.firstName(),
    password: 'password'
  };
  const user = userRepository.register(registerUserDto);
  return user;
});