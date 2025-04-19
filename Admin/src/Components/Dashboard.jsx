import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Button, Form, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import User from './User';
import TeamForm from './Form';
import Login from './Login';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  
  const [collapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState("4");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login status

  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: '1',
      label: <Link to="/"> Dashboard</Link>,
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: <Link to="/User"> Users</Link>,
    },
    {
      key: '3',
      icon: <FormOutlined />,
      label: <Link to="/Form"> Form</Link>,
    },
    {
      key: '4',
      icon: <LoginOutlined />,
      label: <Link to="/Login"> Login</Link>,
    },
  
  ];

  const handleMenuChange = (item) => {
    setCurrentPath(item?.key);
    console.log('Selected menu item:', item?.key);
  };
  const handleLogin = () => {
    setIsAuthenticated(true); // Set user as logged in
    setCurrentPath('1'); // Redirect to Dashboard after login
  };
  return (
    <Layout>
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
          defaultSelectedKeys={['4']}
          onClick={handleMenuChange}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 450,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
           {currentPath === '4' && <Login onLogin={handleLogin} />} {/* Show Login */}
          {isAuthenticated && currentPath === '2' && <User />} {/* Show Users if logged in */}
          {isAuthenticated && currentPath === '3' && <TeamForm />} {/* Show Form if logged in */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;