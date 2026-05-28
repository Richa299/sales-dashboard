type DashboardSectionProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  width: string;
  height: string;
  children: React.ReactNode;
};

const DashboardSection = ({
  title,
  subtitle,
  action,
  width,
  height,
  children,
}: DashboardSectionProps) => {
  return (
    <section
      className={`
        ${width}
        ${height}

        bg-white
        rounded-[20px]
        border
        border-[#F5F5F7]

        !p-[24px]
      `}
    >
      <div className="flex items-start justify-between !mb-[20px]">
        <div>
          <h2 className="text-[20px] font-semibold text-[#05004E] font-['Poppins']">
            {title}
          </h2>

          {subtitle && (
            <p className="text-[16px] text-[#737791] mt-[4px] font-['Poppins']">
              {subtitle}
            </p>
          )}
        </div>

        {action}
      </div>

      {children}
    </section>
  );
};

export default DashboardSection;
