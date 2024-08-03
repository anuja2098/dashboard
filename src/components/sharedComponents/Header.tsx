import { Input } from "@/components/ui/input";
import { Bell, Mail, Search, Settings } from "lucide-react";

const Header = () => {
  return (
    <div className="h-[70px] bg-black-gray items-center flex justify-between text-white pl-6">
      <div className="">
        <Input
          className="bg-light-gray border-gray-700 w-72"
          startIcon={Search}
          placeholder="Search"
        />
      </div>
      <div className="flex text-white gap-6 p-10">
        <Mail />
        <Settings />
        <Bell />
      </div>
    </div>
  );
};

export default Header;
