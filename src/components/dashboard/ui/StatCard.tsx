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
        h-[184px]

        rounded-[16px]

        !p-[1.5rem]
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

          !mb-[15px]
        `}
      >
        {icon}
      </div>

      <h3
        className="
          text-[24px]
          font-bold
          text-[#151D48]

          mb-[8px]
        "
      >
        {amount}
      </h3>

      <p
        className="
          text-[16px]
          font-medium
          text-[#425166]

          mb-[10px]
        "
      >
        {title}
      </p>

      <span
        className="
          text-[12px]
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
