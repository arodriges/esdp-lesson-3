import { ProductForm } from '@/components/ProductForm';
import { createProduct } from '@/features/productsSlice';
import { useAppDispatch } from '@/store/hook';
import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

export function NewProductForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onProductFormSubmit = async (product: FormData) => {
    await dispatch(createProduct(product));
    navigate('/');
  };

  return (
    <>
      <Title level={3}>New product</Title>
      <ProductForm onProductFormSubmit={onProductFormSubmit} />
    </>
  );
}
