import React from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Layout, Menu, Typography } from 'antd'
import Error404 from '../components/Errror404'
import Dashboard from './Dashboard/Dashboard'

import './MainLayout.less'

const { Content, Footer, Sider, Header } = Layout
const { Title } = Typography

const sidebarRoutes = [
  {
    icon: UploadOutlined,
    route: 'dashboard',
    label: 'Dashboard',
    key: 1,
  },
  {
    icon: UserOutlined,
    route: 'profile',
    label: 'Profile',
    key: 2,
  },
]

function MainLayout() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        className="dashboard-left-navbar"
        width={270}
        theme="light"
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sidebarRoutes.map((item, index) => ({
            key: String(index + 1),
            icon: React.createElement(item.icon),
            label: item.label,
            onClick: () => {
              navigate(`/user/${item.route}`)
            },
          }))}
        />
      </Sider>

      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            margin: '16px 16px 0',
            padding: '1rem',
          }}
        >
          <Title level={3}>Header</Title>
        </Header>
        <Content
          style={{
            margin: '16px 16px 0',
          }}
          className="dashboard-right-content"
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Card>Profile</Card>} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Content>
        <Footer
          style={{
            textAlign: 'end',
          }}
        >
          About
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
