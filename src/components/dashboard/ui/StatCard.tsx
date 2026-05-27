type StatCardProps = {
  bgColor: string;
  iconBg: string;
  icon: React.ReactNode;
  amount: string;
  title: string;
  growth: string;
};

const StatCard = ({
  bgColor,
  iconBg,
  icon,
  amount,
  title,
  growth,
}: StatCardProps) => {
  return (
    <div
      className={`
        ${bgColor}

        w-[180px]
        h-[187px]

        rounded-[16px]

        px-[18px]
        py-[20px]
      `}
    >
      <div
        className={`
          ${iconBg}

          w-[42px]
          h-[42px]

          rounded-full

          flex
          items-center
          justify-center

          text-[#FFFFFF]

          mb-[22px]
        `}
      >
        {icon}
      </div>

      <h3
        className="
          text-[34px]
          font-bold
          text-[#151D48]

          mb-[8px]
        "
      >
        {amount}
      </h3>

      <p
        className="
          text-[18px]
          font-medium
          text-[#425166]

          mb-[10px]
        "
      >
        {title}
      </p>

      <span
        className="
          text-[14px]
          font-medium
          text-[#4079ED]
        "
      >
        {growth}
      </span>
    </div>
  );
};

export default StatCard;
