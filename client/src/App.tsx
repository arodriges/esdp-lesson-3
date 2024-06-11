import { Link, Route, Routes } from 'react-router-dom';
import { Products } from './containers/Products';
import { NewProductForm } from './containers/NewProductForm';
import { Breadcrumb, Layout, theme } from 'antd';
import { AppToolbar } from './components/UI/AppToolbar';

const { Content, Footer } = Layout;

const layoutStyle = {
  overflow: 'hidden',
  width: '100%',
};

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={layoutStyle}>
      <AppToolbar />
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products/new" element={<NewProductForm />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
