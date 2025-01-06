import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Content from "../../modules/DashboardContent";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <Content />
    </DashboardLayout>
  );
};

export default Dashboard;
