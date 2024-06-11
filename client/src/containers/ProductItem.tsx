import { IProduct } from './Products';
import imageNotAvalable from '../assets/images/image_not_available.jpg';
import { apiUrl } from '@/helpers/axiosApiClient';
import { Card } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

interface Props {
  product: IProduct;
}

export function ProductItem({ product }: Props) {
  const { title, price, description, image, user } = product;

  let cardImage = imageNotAvalable;

  if (image) {
    cardImage = image.startsWith('http') ? image : `${apiUrl}/uploads/${image}`;
  }

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={cardImage} />}
      actions={[<EllipsisOutlined key="ellipsis" />]}
    >
      <Meta title={title} description={description} />
      <span>{price}</span>
      {user ? <div>Пользователь: {user.displayName}</div> : null}
    </Card>
  );
}
