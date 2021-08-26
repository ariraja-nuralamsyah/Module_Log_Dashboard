import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Layout, Menu } from 'antd';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function Sidebar() {
  const [selectedItem, setSelectedMenuItem] = useState("Dashboard");

  return (
    <>
      <Sider>
        <Menu
          selectedKeys={selectedItem}
          mode="inline"
          onClick={(e) => setSelectedMenuItem(e.key)}
        >
          <Menu.Item key="Dashboard">
            <Link to='/'>Dashboard</Link>
          </Menu.Item>
          <SubMenu key="About Us"
            title={
              <span>
                <MailOutlined />
                <span>About Us</span>
              </span>
            }>
            <Menu.ItemGroup key="Menu" title="Menu">
              {SidebarData.map((item, index) => {
                return (
                  <Menu.Item key={index} >
                    <Link to={item.path}>
                      {item.title}
                    </Link>
                  </Menu.Item>
                )
              })}
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  )
}

export default Sidebar