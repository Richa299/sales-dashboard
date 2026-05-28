import SidebarItem from "../ui/SidebarItem";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { FiBarChart2 } from "react-icons/fi";
import { AiFillPieChart } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import dabang from "../../assets/dabang.svg";

const Sidebar = () => {
  return (
    <aside
      className="
        w-[345px]
        min-h-screen
        bg-white
        px-8
        py-10
        flex
        flex-col
        justify-between
        items-center
      "
    >
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="flex gap-4 !ml-[-4rem]">
          <div
            className="
              w-[52px]
              h-[52px]
              rounded-lg
              bg-[#5D5FEF]
              flex
              items-center
              justify-center
            "
          >
            <img
              src={logo}
              alt="logo"
              className="
    w-[24px]
    h-[24px]
    object-contain
  "
            />{" "}
          </div>

          <h1 className="text-[30px] font-bold text-[#151D48] font-['Poppins']">
            Dabang
          </h1>
        </div>
        <nav
          className="
    w-[252px]
    h-[624px]
    mt-[40rem]
    flex
    flex-col
    gap-4
  "
        >
          <SidebarItem
            title="Dashboard"
            icon={<AiFillPieChart size={22} />}
            active
          />

          <SidebarItem title="Leaderboard" icon={<FiBarChart2 size={22} />} />

          <SidebarItem title="Order" icon={<FiShoppingCart size={22} />} />

          <SidebarItem
            title="Products"
            icon={<MdOutlineShoppingBag size={22} />}
          />

          <SidebarItem title="Sales Report" icon={<BsGraphUp size={22} />} />

          <SidebarItem
            title="Messages"
            icon={<LuMessageSquareMore size={22} />}
          />

          <SidebarItem
            title="Settings"
            icon={<IoSettingsOutline size={22} />}
          />

          <SidebarItem title="Sign Out" icon={<PiSignOut size={22} />} />
        </nav>
      </div>
      <div
        className="
    relative
    w-[238px]
    h-[259px]
    rounded-[24px]
    overflow-hidden
    bg-gradient-to-b
    from-[#5D5FEF]
    to-[#6C63FF]

    flex
    flex-col
    items-center
    justify-center

    text-white
  "
      >
        <div
          className="
      absolute
      w-[180px]
      h-[180px]
      rounded-full

      bg-white/10

      -top-[60px]
      -right-[60px]
    "
        />

        <div
          className="
      absolute
      w-[160px]
      h-[160px]
      rounded-full

      bg-white/10

      -bottom-[80px]
      -left-[40px]
    "
        />

        <div className="relative z-10 flex flex-col items-center">
          <div
            className="
        w-[60px]
        h-[60px]
        rounded-[18px]
        bg-white

        flex
        items-center
        justify-center

        mb-5
      "
          >
            <img
              src={dabang}
              alt="logo"
              className="
    w-[34px]
    h-[34px]
    object-contain
  "
            />{" "}
          </div>

          <h2 className="text-[20px] font-semibold mb-2">Dabang Pro</h2>

          <p
            className="
        text-center
        text-[12px]
        text-white/80
        leading-6
        mb-7
      "
          >
            Get access to all
            <br />
            features on tetumbas
          </p>

          <button
            className="
        w-[140px]
        h-[48px]

        rounded-[8px]
        bg-white

        text-[#5D5FEF]
        text-[16px]
        font-semibold
        !mt-[1rem]
      "
          >
            Get Pro
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
