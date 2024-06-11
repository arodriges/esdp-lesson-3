import {describe, expect, test, jest } from '@jest/globals';
import { ProductService } from '../product.service';
import { ProductDto } from '@/dto/product.dto';
import { ProductRepository } from '../../repositories/product.repository';

const productDto = new ProductDto();
productDto.categoryId = 1;
productDto.price = 1000;
productDto.title = "Lorem";

jest.mock('../../repositories/product.repository');
(ProductRepository as any).mockImplementation(() => {
  return {
    createProduct: jest.fn(() => productDto),
  };
});

describe('product.service', () => {
  const productService = new ProductService();

  test('Успешное создание продукта', async () => {
    const result = await productService.createProduct(productDto);
    expect(result).toStrictEqual(productDto);
  });

  test('Ошибка при отсутствии цены', async () => {
    const productDtoForError = new ProductDto();
    productDtoForError.title = "Lorem";
    productDtoForError.categoryId = 1;

    const throwingFunction = () => productService.createProduct(productDtoForError);

    await throwingFunction().catch(error => {
      expect(error[0]).toMatchObject({
        message: [
          "Укажите корректную цену",
          "Укажите цену продукта",
        ],
        type: "price",
      });
    });
  });
});