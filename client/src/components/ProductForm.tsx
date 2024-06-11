import { IProduct } from '@/containers/Products';
// import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Input, InputNumber, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

interface Props {
  onProductFormSubmit: (product: FormData) => Promise<void>;
}

export function ProductForm({ onProductFormSubmit }: Props) {
  const [file, setFile] = useState<File | undefined>();

  const submitFormHandler = (values: IProduct) => {
    const formData: FormData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (!Array.isArray(value) && value) {
        formData.append(key, value);
      }
    });
    if (file) {
      formData.append('image', file);
    }

    onProductFormSubmit(formData);
  };
  // const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e?.target?.files?.[0]) {
  //     const name = e.target.name;
  //     const file: File = e.target.files[0];
  //     setProduct((prevProduct) => {
  //       return { ...prevProduct, [name]: file };
  //     });
  //   }
  // };

  const normFile = (e: { file: File; fileList: File[] }) => {
    console.log('Upload event:', e);
    if (e?.file) {
      setFile(e.file);
    }
  };

  // <FileInput label="Image" name="image" onChange={fileChangeHandler}/>
  return (
    <Form name="product-creation" onFinish={submitFormHandler}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please enter title' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter price' }]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item
        label="Category"
        name="categoryId"
        rules={[{ required: true, message: 'Please enter categoryId' }]}
      >
        <InputNumber min={1} />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea />
      </Form.Item>
      <Form.Item name="image" label="Image" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload name="logo" listType="picture" beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create new product
        </Button>
      </Form.Item>
    </Form>
  );
}
