import { fetchProducts } from '@/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { useEffect } from 'react';
import { ProductItem } from './ProductItem';
import { Flex, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export function Products() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Title level={3}>Products</Title>

      <Flex wrap="wrap" gap="large" justify="center">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Flex>

      <Link to={'/products/new'}>Add product</Link>
    </>
  );
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  userId?: number;
  user: { displayName: string };
}
