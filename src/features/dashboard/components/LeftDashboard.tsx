// import Card from "@/components/sharedComponents/Card";
import CounterWidgets from "./CounterWidgets";
import CustomerDetails from "./CustomerDetails";
import Activity from "./Activity";

const LeftDashboard = () => {
  return (
    <div className="w-8/12 flex flex-col gap-8">
      <CounterWidgets />
      <Activity />
      {/* <Card className="min-h-28" /> */}
      <CustomerDetails />
    </div>
  );
};

export default LeftDashboard;
