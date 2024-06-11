import { Alert, Form, FormInstance, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/store/hook';
import { UserRequest, loginUser } from '@/features/userSlice';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/hooks/auth';

interface Props {
  form: FormInstance;
  closeModal: () => void;
}

export function LoginForm({ form, closeModal }: Props) {
  const dispatch = useAppDispatch();
  const { loading, loginError } = useAppSelector((state) => state.user);

  const [submitted, setSubmitted] = useState(false);

  const userContext = useContext(UserContext);

  useEffect(() => {
    if (!loading && submitted && !loginError) {
      userContext.setToken('abc');
      form.resetFields();
      closeModal();
    }
  }, [loading, submitted]);

  const onFinish = (values: UserRequest) => {
    dispatch(loginUser(values));
    setSubmitted(true);
  };

  return (
    <>
      <Form name="login-form" onFinish={onFinish} form={form}>
        {loginError ? (
          <Form.Item>
            <Alert message={loginError} type="error" />
          </Form.Item>
        ) : null}
        <Form.Item
          name="username"
          // rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
    </>
  );
}
