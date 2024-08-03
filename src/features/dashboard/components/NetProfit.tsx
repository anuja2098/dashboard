import Card from "@/components/sharedComponents/Card";
import { ArrowUp } from "lucide-react";

const NetProfit = () => {
  return (
    <div>
      <Card className="h-28 p-2.5 ">
        <h1>Net Profit</h1>
        <p className="font-extrabold text-4xl">$ 6759.25</p>
        <div className="flex text-green-500 mt-2">
          <div>
            <ArrowUp />
          </div>
          <div className="text-sm ">3%</div>
        </div>
      </Card>
    </div>
  );
};

export default NetProfit;
