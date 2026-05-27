import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

const Header = () => {
  return (
    <header
      className="
        h-[94px]
        bg-white

        flex
        items-center
        justify-between

        px-[36px]
      "
    >
      <h1
        className="
          text-[40px]
          font-bold
          text-[#151D48]
        "
      >
        Dashboard
      </h1>

      <div className="flex items-center gap-[28px]">
        <div
          className="
            w-[513px]
            h-[60px]

            bg-[#F9FAFB]
            rounded-[16px]

            px-[24px]

            flex
            items-center
            gap-[14px]
          "
        >
          <FiSearch size={22} className="text-[#5D5FEF]" />

          <input
            type="text"
            placeholder="Search here..."
            className="
              w-full
              bg-transparent
              outline-none

              text-[16px]
              text-[#737791]

              placeholder:text-[#737791]
            "
          />
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="flag"
            className="w-[24px] h-[24px] rounded-full"
          />

          <span
            className="
              text-[16px]
              font-medium
              text-[#374557]
            "
          >
            Eng (US)
          </span>

          <IoChevronDown size={18} className="text-[#A0AEC0]" />
        </div>

        <div
          className="
            relative

            w-[52px]
            h-[52px]

            rounded-[14px]
            bg-[#FFF7ED]

            flex
            items-center
            justify-center
          "
        >
          <IoNotificationsOutline size={24} className="text-[#F59E0B]" />

          <div
            className="
              absolute
              top-[12px]
              right-[14px]

              w-[8px]
              h-[8px]

              rounded-full
              bg-[#EF4444]
            "
          />
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="user"
            className="
              w-[60px]
              h-[60px]
              rounded-[16px]
              object-cover
            "
          />

          <div>
            <h3
              className="
                text-[18px]
                font-semibold
                text-[#151D48]
              "
            >
              Musfiq
            </h3>

            <p
              className="
                text-[14px]
                text-[#737791]
              "
            >
              Admin
            </p>
          </div>

          <IoChevronDown size={18} className="text-[#A0AEC0]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
