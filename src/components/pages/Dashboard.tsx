import DashboardContent from "../dashboard/DashboardContent";
import DashboardLayout from "../layout/DashboardLayout";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
  return (
    <DashboardLayout sidebar={<Sidebar />} header={<Header />}>
      <DashboardContent />{" "}
    </DashboardLayout>
  );
};

export default Dashboard;
