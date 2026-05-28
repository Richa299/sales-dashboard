import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    loyalCustomers: 300,
    newCustomers: 250,
    uniqueCustomers: 260,
  },
  {
    month: "Feb",
    loyalCustomers: 280,
    newCustomers: 240,
    uniqueCustomers: 290,
  },
  {
    month: "Mar",
    loyalCustomers: 260,
    newCustomers: 180,
    uniqueCustomers: 320,
  },
  {
    month: "Apr",
    loyalCustomers: 180,
    newCustomers: 140,
    uniqueCustomers: 280,
  },
  {
    month: "May",
    loyalCustomers: 170,
    newCustomers: 160,
    uniqueCustomers: 240,
  },
  {
    month: "Jun",
    loyalCustomers: 250,
    newCustomers: 320,
    uniqueCustomers: 210,
  },
  {
    month: "Jul",
    loyalCustomers: 310,
    newCustomers: 350,
    uniqueCustomers: 250,
  },

  {
    month: "Sep",
    loyalCustomers: 300,
    newCustomers: 290,
    uniqueCustomers: 320,
  },
  {
    month: "Oct",
    loyalCustomers: 260,
    newCustomers: 240,
    uniqueCustomers: 300,
  },
  {
    month: "Nov",
    loyalCustomers: 180,
    newCustomers: 200,
    uniqueCustomers: 250,
  },
  {
    month: "Dec",
    loyalCustomers: 140,
    newCustomers: 150,
    uniqueCustomers: 210,
  },
];

const VisitorChart = () => {
  return (
    <div className="w-full h-[50%] bg-[#F8F9FA]">
      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              //   strokeDasharray="3 3"
              vertical={false}
              stroke="#F5F5F7"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#A3AED0",
                fontSize: 12,
              }}
            />

            <Line
              type="natural"
              strokeWidth={4}
              dataKey="loyalCustomers"
              stroke="#A700FF"
              dot={false}
            />

            <Line
              type="natural"
              strokeWidth={4}
              dataKey="newCustomers"
              stroke="#EF4444"
              dot={false}
            />

            <Line
              type="natural"
              strokeWidth={4}
              dataKey="uniqueCustomers"
              stroke="#22C55E"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-[24px] !mt-[12px] !ml-[4.5rem]">
        <LegendItem color="#A700FF" label="Loyal Customers" />

        <LegendItem color="#EF4444" label="New Customers" />

        <LegendItem color="#22C55E" label="Unique Customers" />
      </div>
    </div>
  );
};

export default VisitorChart;

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => {
  return (
    <div className="flex items-center gap-[8px]">
      <div
        className="w-[10px] h-[10px] rounded-full"
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
