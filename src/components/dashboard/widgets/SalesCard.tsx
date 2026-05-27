import { IoBagHandle, IoPricetagOutline } from "react-icons/io5";

import {
  HiOutlineClipboardDocumentList,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import StatCard from "../ui/StatCard";

const SalesCards = () => {
  return (
    <div className="flex gap-[20px]">
      <StatCard
        bgColor="bg-[#FFE2E5]"
        iconBg="bg-[#FA5A7D]"
        icon={<IoBagHandle size={18} />}
        amount="$1k"
        title="Total Sales"
        growth="+8% from yesterday"
      />

      <StatCard
        bgColor="bg-[#FFF4DE]"
        iconBg="bg-[#FF947A]"
        icon={<HiOutlineClipboardDocumentList size={18} />}
        amount="300"
        title="Total Order"
        growth="+5% from yesterday"
      />

      <StatCard
        bgColor="bg-[#DCFCE7]"
        iconBg="bg-[#3CD856]"
        icon={<IoPricetagOutline size={18} />}
        amount="5"
        title="Product Sold"
        growth="+1.2% from yesterday"
      />

      <StatCard
        bgColor="bg-[#F3E8FF]"
        iconBg="bg-[#BF83FF]"
        icon={<HiOutlineUserGroup size={18} />}
        amount="8"
        title="New Customers"
        growth="0.5% from yesterday"
      />
    </div>
  );
};

export default SalesCards;
