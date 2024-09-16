import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdOutlineLocalLibrary } from "react-icons/md";
import {
  FaChalkboardTeacher,
  FaCodeBranch,
  FaProjectDiagram,
} from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import ModalNotification from "./notification/ModalNotification";
import { SiSessionize } from "react-icons/si";
import logo from "../assets/logo.png";
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
          className="sticky bg-white h-screen top-0 left-0"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div>
            <img
              className={`${collapsed ? "w-24 h-24 " : "w-28 h-28"} mx-auto `}
              alt=""
              src={logo}
            />
          </div>
          <Menu
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
                label: <Link to={"major"}>Majors</Link>,
              },
              {
                key: "/home/session",
                icon: <SiSessionize />,
                label: <Link to={"session"}>Sessions</Link>,
              },
              {
                key: "/home/student",
                icon: <PiStudentBold />,
                label: <Link to={"student"}>Students</Link>,
              },
              {
                key: "/home/teacher",
                icon: <FaChalkboardTeacher />,
                label: <Link to={"teacher"}>Teachers</Link>,
              },
              {
                key: "/home/project",
                icon: <FaProjectDiagram />,
                label: <Link to={"project"}>Projects</Link>,
              },
              {
                key: "/home/library",
                icon: <MdOutlineLocalLibrary />,
                label: <Link to={"library"}>Libraries</Link>,
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
                  : location.pathname === "/home/session"
                  ? "Session"
                  : location.pathname.startsWith("/home/session/detail")
                  ? "Project in session"
                  : location.pathname === "/home/library" && "Library"}
              </p>
              <div className="flex items-center">
                <ModalNotification />

                <Button type="text" className="mx-2" onClick={logout}>
                  Log out
                </Button>
              </div>
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
