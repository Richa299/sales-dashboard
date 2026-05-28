import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

const data = [
  {
    month: "Jan",
    volume: 18,
    services: 10,
  },
  {
    month: "Feb",
    volume: 24,
    services: 12,
  },
  {
    month: "Mar",
    volume: 19,
    services: 5,
  },
  {
    month: "Apr",
    volume: 16,
    services: 6,
  },
  {
    month: "May",
    volume: 12,
    services: 5,
  },
  {
    month: "Jun",
    volume: 13,
    services: 8,
  },
];

const VolumeChart = () => {
  return (
    <div className="w-full h-[90%] flex flex-col justify-evenly">
      <div className="w-full h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={16}>
            <XAxis hide dataKey="month" />

            <Bar
              dataKey="volume"
              fill="#0EA5E9"
              radius={[8, 8, 0, 0]}
              barSize={10}
            />

            <Bar
              dataKey="services"
              fill="#22C55E"
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        className="
          border-t
          border-[#F5F5F7]

          !mt-[20px]

          flex
          items-center
          justify-center
        "
      >
        <div className="flex items-center gap-[12px] pr-[26px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#0EA5E9]" />

          <div>
            <p
              className="
                text-[14px]
                text-[#A3AED0]
              "
            >
              Volume
            </p>

            <h3
              className="
                text-[18px]
                font-semibold
                text-[#151D48]
              "
            >
              1,135
            </h3>
          </div>
        </div>

        <div className="w-[1px] h-[40px] bg-[#F5F5F7]" />

        <div className="flex items-center gap-[12px] pl-[26px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#22C55E]" />

          <div>
            <p
              className="
                text-[14px]
                text-[#A3AED0]
              "
            >
              Services
            </p>

            <h3
              className="
                text-[18px]
                font-semibold
                text-[#151D48]
              "
            >
              635
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeChart;
