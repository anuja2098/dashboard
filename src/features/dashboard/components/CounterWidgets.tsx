import Card from "@/components/sharedComponents/Card";
import { WIDGET_DATA } from "../constants";
import { ArrowDown, ArrowUp } from "lucide-react";

const CounterWidgets = () => {
  return (
    <div className="flex gap-4 mt-2 ">
      {WIDGET_DATA.map((item) => (
        <Card className="p-2.5">
          <div className={`p-1.5 rounded-lg bg-${item.color}/20 inline-block`}>
            <item.icon className={`flex justify-center text-${item.color} `} />
          </div>
          <p>{item.name}</p>
          <div className="flex justify-between">
            <div className="font-bold text-2xl ">{item.number}</div>

            <div
              className={`text-sm items-center flex ${
                item.isIncrease ? `text-green-500` : `text-red-500`
              }`}
            >
              {item.isIncrease ? <ArrowUp /> : <ArrowDown />}

              <p>{item.value}%</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CounterWidgets;
