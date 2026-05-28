import { ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";

const data = [
  {
    month: "Jan",
    realitySales: 14,
    targetSales: 18,
  },
  {
    month: "Feb",
    realitySales: 12,
    targetSales: 16,
  },
  {
    month: "Mar",
    realitySales: 10,
    targetSales: 22,
  },
  {
    month: "Apr",
    realitySales: 14,
    targetSales: 18,
  },
  {
    month: "May",
    realitySales: 17,
    targetSales: 25,
  },
  {
    month: "Jun",
    realitySales: 17,
    targetSales: 25,
  },
  {
    month: "Jul",
    realitySales: 17,
    targetSales: 25,
  },
];

const TargetReality = () => {
  return (
    <div className="w-full flex flex-col justify-evenly">
      <div className="w-full h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
              dy={10}
            />

            <Bar
              dataKey="realitySales"
              fill="#22C55E"
              radius={[8, 8, 8, 8]}
              barSize={10}
            />

            <Bar
              dataKey="targetSales"
              fill="#FACC15"
              radius={[8, 8, 8, 8]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col gap-[10px] !mt-[1rem]">
        <div
          className="
            flex
            items-center
            justify-between
            rounded-[14px]

            px-[16px]
            py-[14px]
          "
        >
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[36px]
                h-[36px]

                rounded-[10px]

                bg-[#DCFCE7]

                flex
                items-center
                justify-center
              "
            >
              <span className="text-[#22C55E] text-[16px]">👜</span>
            </div>

            <div>
              <p
                className="
                  text-[12px]
                  font-medium
                  text-[#151D48]
                "
              >
                Reality Sales
              </p>

              <span
                className="
                  text-[10px]
                  text-[#A3AED0]
                "
              >
                Global
              </span>
            </div>
          </div>

          <h3
            className="
              text-[14px]
              font-semibold
              text-[#22C55E]
            "
          >
            8.823
          </h3>
        </div>

        <div
          className="
            flex
            items-center
            justify-between


            rounded-[14px]

            px-[16px]
            py-[14px]
          "
        >
          <div className="flex items-center gap-[12px]">
            <div
              className="
                w-[36px]
                h-[36px]

                rounded-[10px]

                bg-[#FEF3C7]

                flex
                items-center
                justify-center
              "
            >
              <span className="text-[#FACC15] text-[16px]">🎯</span>
            </div>

            <div>
              <p
                className="
                  text-[12px]
                  font-medium
                  text-[#151D48]
                "
              >
                Target Sales
              </p>

              <span
                className="
                  text-[10px]
                  text-[#A3AED0]
                "
              >
                Commercial
              </span>
            </div>
          </div>

          <h3
            className="
              text-[14px]
              font-semibold
              text-[#F59E0B]
            "
          >
            12.122
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TargetReality;
