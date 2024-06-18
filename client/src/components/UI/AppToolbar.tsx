import { AuthModal } from '@/containers/AuthModal';
import { UserContext } from '@/hooks/auth';
import { Menu, MenuProps } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useContext } from 'react';
import { Logout } from '../Logout';

export function AppToolbar() {
  const user = useContext(UserContext);

  let items: MenuProps['items'] = [];
  if (user.token) {
    items.push({
      label: <Logout />,
      key: 'logout',
    });
  } else {
    items = items.concat([
      {
        label: <AuthModal type="register" />,
        key: 'register',
      },
      {
        label: <AuthModal type="login" />,
        key: 'login',
      },
    ]);
  }

  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" style={{ color: 'white' }}>
        Computer parts shop
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        selectable={false}
      />
    </Header>
  );
}
