import { Outlet } from "react-router-dom";
import DashboardHeader from "./header/Header";
import { Layout } from "antd";

const DashboardLayout = () => {
  return (
    <>
      <Layout className="layout">
        <DashboardHeader />
        <Outlet />
      </Layout>
    </>
  );
};

export default DashboardLayout;
