import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { MdDashboard, MdOutlineLocalLibrary } from "react-icons/md";
import { FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
const { Header, Sider, Content } = Layout;
const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sider
          className="sticky h-screen top-0 left-0"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <MdDashboard />,
                label: <Link to={"/home"}>Dashboard</Link>,
              },
              {
                key: "2",
                icon: <MdDashboard />,
                label: <Link to={"major"}>Major</Link>,
              },
              {
                key: "3",
                icon: <FaProjectDiagram />,
                label: <Link to={"project"}>Project</Link>,
              },
              {
                key: "4",
                icon: <PiStudentBold />,
                label: <Link to={"student"}>Student</Link>,
              },
              {
                key: "5",
                icon: <FaChalkboardTeacher />,
                label: <Link to={"teacher"}>Teacher</Link>,
              },
              {
                key: "6",
                icon: <MdOutlineLocalLibrary />,
                label: <Link to={"library"}>Library</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default SideBar;
