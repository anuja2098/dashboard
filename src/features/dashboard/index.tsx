import LeftDashboard from "./components/LeftDashboard";
import RightDashboard from "./components/RightDashboard";

const Dashboard = () => {
  return (
    <div className=" text-white bg-main-bg p-6 h-screen">
      <h1 className="font-bold text-2xl">Dashboard</h1>
      <div className="flex gap-10">
        <LeftDashboard />
        <RightDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
