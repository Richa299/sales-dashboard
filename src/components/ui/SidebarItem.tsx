type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
};

const SidebarItem = ({ title, icon, active = false }: SidebarItemProps) => {
  return (
    <button
      className={`
        w-[252px]
        h-[64px]
        rounded-[16px]
        px-[24px]
    justify-center

        flex
        items-center

        ${active ? "bg-[#5D5FEF]" : "bg-transparent"}
      `}
    >
      <div
        className="
          w-[172px]
          h-[32px]

          flex
          items-center
          gap-[24px]
        "
      >
        <span
          className={`
            text-[22px]
            ${active ? "text-white" : "text-[#737791]"}
          `}
        >
          {icon}
        </span>

        <span
          className={`
            text-[18px]
            font-normal

            ${active ? "text-white" : "text-[#737791]"}
          `}
        >
          {title}
        </span>
      </div>
    </button>
  );
};

export default SidebarItem;
