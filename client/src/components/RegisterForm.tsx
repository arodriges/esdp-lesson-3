import { Form, FormInstance, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { UserRequest, registerUser } from '@/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { useEffect, useState } from 'react';

interface Props {
  form: FormInstance;
  closeModal: () => void;
}

export function RegisterForm({ form, closeModal }: Props) {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.user.registerError);
  const loading = useAppSelector((state) => state.user.loading);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!loading && submitted) {
      if (Array.isArray(errors)) {
        const fieldsError = errors.map((err) => {
          return { name: err.type, errors: err.message };
        });
        form.setFields(fieldsError);
      } else {
        form.resetFields();
        closeModal();
      }
    }
  }, [loading, submitted]);

  const onFinish = (values: UserRequest) => {
    dispatch(registerUser(values));
    setSubmitted(true);
  };

  return (
    <Form name="register-form" onFinish={onFinish} form={form}>
      <Form.Item
        name="username"
        // rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="displayName">
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Display name"
        />
      </Form.Item>
      <Form.Item
        name="password"
        // rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
    </Form>
  );
}
