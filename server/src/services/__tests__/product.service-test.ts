import {describe, test, expect } from '@jest/globals'; 
// import { ProductService } from '../product.service';
// import { ProductDto } from '@/dto/product.dto';
// import { ProductRepository } from '../../repositories/product.repository';

// const productDto = new ProductDto();
// productDto.categoryId = 1;
// productDto.price = 1000;
// productDto.title = "Lorem";

// jest.mock('../../repositories/product.repository');
// (ProductRepository as any).mockImplementation(() => {
//   return {
//     createProduct: jest.fn(() => productDto),
//   };
// });

function sum(a: number, b: number) {
  return a + b;
}

describe('product.service', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  // const productService = new ProductService();

  // test('Успешное создание продукта', async () => {
  //   const result = await productService.createProduct(productDto);
  //   expect(result).toStrictEqual(productDto);
  // });

  // test('Ошибка при отсутствии цены', async () => {
  //   const productDtoForError = new ProductDto();
  //   productDtoForError.title = "Lorem";
  //   productDtoForError.categoryId = 1;

  //   const throwingFunction = () => productService.createProduct(productDtoForError);

  //   await throwingFunction().catch(error => {
  //     expect(error[0]).toMatchObject({
  //       message: [
  //         "Укажите корректную цену",
  //         "Укажите цену продукта",
  //       ],
  //       type: "price",
  //     });
  //   });
  // });
});