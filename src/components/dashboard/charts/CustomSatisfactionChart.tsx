import { ResponsiveContainer, AreaChart, Area, Line, XAxis } from "recharts";

const data = [
  {
    month: "Jan",
    lastMonth: 120,
    thisMonth: 220,
  },
  {
    month: "Feb",
    lastMonth: 140,
    thisMonth: 190,
  },
  {
    month: "Mar",
    lastMonth: 180,
    thisMonth: 210,
  },
  {
    month: "Apr",
    lastMonth: 90,
    thisMonth: 170,
  },
  {
    month: "May",
    lastMonth: 90,
    thisMonth: 215,
  },
  {
    month: "Jun",
    lastMonth: 110,
    thisMonth: 130,
  },
  {
    month: "Jul",
    lastMonth: 140,
    thisMonth: 320,
  },
];

const SatisfactionChart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-evenly">
      {/* CHART */}
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis hide dataKey="month" />

            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0EA5E9" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="natural"
              dataKey="lastMonth"
              stroke="none"
              fill="url(#blueGradient)"
            />

            <Line
              type="natural"
              dataKey="lastMonth"
              stroke="#0EA5E9"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#0EA5E9",
              }}
            />

            <Line
              type="natural"
              dataKey="thisMonth"
              stroke="#22C55E"
              strokeWidth={3}
              dot={{
                r: 3,
                fill: "#22C55E",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-[42px]">
        <div>
          <div className="flex items-center gap-[8px] mb-[6px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#0EA5E9]" />

            <span
              className="
                text-[14px]
                text-[#A3AED0]
              "
            >
              Last Month
            </span>
          </div>

          <h3
            className="
              text-[14px]
              font-semibold
              text-[#222B45]
            "
          >
            $3,004
          </h3>
        </div>

        <div>
          <div className="flex items-center gap-[8px] mb-[6px]">
            <div className="w-[10px] h-[10px] rounded-full bg-[#22C55E]" />

            <span
              className="
                text-[14px]
                text-[#A3AED0]
              "
            >
              This Month
            </span>
          </div>

          <h3
            className="
              text-[14px]
              font-semibold
              text-[#222B45]
            "
          >
            $4,504
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionChart;
