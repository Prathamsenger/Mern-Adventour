import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  LoginOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import Users from './Users';
import TeamForm from './Form';
import Login from './Login';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState('1');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: <Link to="/Users">Users</Link>,
    },
    {
      key: '3',
      icon: <FormOutlined />,
      label: <Link to="/Form">Form</Link>,
    },
    {
      key: '4',
      icon: <LoginOutlined />,
      label: <Link to="/Login">Login</Link>,
    },
  ];

  const handleMenuChange = (item) => {
    setCurrentPath(item.key);
  };

  const handleLogin = () => {
    setIsAuthenticated(true); // Set user as logged in
    setCurrentPath('1'); // Redirect to Dashboard after login
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            textAlign: 'center',
            padding: '16px',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            backgroundColor: '#001529',
          }}
        >
          Adventour
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          selectedKeys={[currentPath]}
          onClick={handleMenuChange}
          items={menuItems}
        />
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
            }}
          />
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
            {currentPath === '1' && 'Dashboard'}
            {currentPath === '2' && 'Users'}
            {currentPath === '3' && 'Form'}
            {currentPath === '4' && 'Login'}
          </div>
        </Header>

        {/* Content */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 450,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {currentPath === '4' && <Login onLogin={handleLogin} />}
        
          {isAuthenticated && currentPath === '2' && <Users />}
          {isAuthenticated && currentPath === '3' && <TeamForm />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;