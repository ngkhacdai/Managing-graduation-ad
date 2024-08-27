import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdOutlineLocalLibrary } from "react-icons/md";
import {
  FaChalkboardTeacher,
  FaCodeBranch,
  FaProjectDiagram,
} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
const { Header, Sider, Content } = Layout;
const SideBar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  let location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
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
            defaultSelectedKeys={[location.pathname]}
            items={[
              {
                key: "/home",
                icon: <MdDashboard />,
                label: <Link to={"/home"}>Dashboard</Link>,
              },
              {
                key: "/home/major",
                icon: <FaCodeBranch />,
                label: <Link to={"major"}>Major</Link>,
              },
              {
                key: "/home/project",
                icon: <FaProjectDiagram />,
                label: <Link to={"project"}>Project</Link>,
              },
              {
                key: "/home/student",
                icon: <PiStudentBold />,
                label: <Link to={"student"}>Student</Link>,
              },
              {
                key: "/home/teacher",
                icon: <FaChalkboardTeacher />,
                label: <Link to={"teacher"}>Teacher</Link>,
              },
              {
                key: "/home/library",
                icon: <MdOutlineLocalLibrary />,
                label: <Link to={"library"}>Library</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              padding: 0,
              zIndex: 10,
              background: colorBgContainer,
            }}
          >
            <div className="flex  justify-between items-center">
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
              <p className="font-bold text-xl">
                {location.pathname === "/home"
                  ? "Dashboard"
                  : location.pathname === "/home/major"
                  ? "Major"
                  : location.pathname === "/home/project"
                  ? "Project"
                  : location.pathname === "/home/student"
                  ? "Student"
                  : location.pathname === "/home/teacher"
                  ? "Teacher"
                  : location.pathname === "/home/library" && "Library"}
              </p>
              <Button className="mx-2" onClick={logout}>
                Log out
              </Button>
            </div>
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
