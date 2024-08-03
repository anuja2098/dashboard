import Card from "@/components/sharedComponents/Card";
import { CUSTOMER_DATA } from "../constants";
import Rating from "@/components/sharedComponents/Rating";

const CustomerFeedBack = () => {
  return (
    <div>
      <Card className="h-4/5 overflow-auto">
        <div>
          <h1 className="text-xl p-2 font-bold">Customer's Feedback</h1>
        </div>

        {CUSTOMER_DATA.map((data) => (
          <div className="p-2 mt-1">
            <h2 className="text-xl">{data.name}</h2>
            <div className="flex">
              <Rating />
            </div>
            <p className="text-gray-400 text-md">{data.review}</p>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default CustomerFeedBack;
