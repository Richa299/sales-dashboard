import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    day: "Monday",
    onlineSales: 14000,
    offlineSales: 12500,
  },
  {
    day: "Tuesday",
    onlineSales: 17000,
    offlineSales: 11800,
  },
  {
    day: "Wednesday",
    onlineSales: 6000,
    offlineSales: 23000,
  },
  {
    day: "Thursday",
    onlineSales: 16000,
    offlineSales: 6500,
  },
  {
    day: "Friday",
    onlineSales: 12000,
    offlineSales: 11000,
  },
  {
    day: "Saturday",
    onlineSales: 17000,
    offlineSales: 13500,
  },
  {
    day: "Sunday",
    onlineSales: 21000,
    offlineSales: 11000,
  },
];

const RevenueChart = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid vertical={false} stroke="#F5F5F7" />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
              dy={10}
            />

            <YAxis
              domain={[0, 25000]}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) => `${value / 1000}k`}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
            />

            <Bar
              dataKey="onlineSales"
              fill="#0EA5E9"
              radius={[10, 10, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="offlineSales"
              fill="#22C55E"
              radius={[10, 10, 0, 0]}
              barSize={14}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-[40px] !mt-[12px]">
        <LegendItem color="#0EA5E9" label="Online Sales" />

        <LegendItem color="#22C55E" label="Offline Sales" />
      </div>
    </div>
  );
};

export default RevenueChart;

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div
        className="w-[12px] h-[12px] rounded-full"
        style={{
          backgroundColor: color,
        }}
      />

      <span
        className="
          text-[14px]
          font-medium
          text-[#737791]
        "
      >
        {label}
      </span>
    </div>
  );
};
