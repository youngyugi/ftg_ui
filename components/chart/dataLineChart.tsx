"use client";

import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  {
    hour: "00:00",
    workingPhones: 6,
  },
  {
    hour: "01:00",
    workingPhones: 5,
  },
  {
    hour: "02:00",
    workingPhones: 4,
  },
  {
    hour: "03:00",
    workingPhones: 3,
  },
  {
    hour: "04:00",
    workingPhones: 3,
  },
  {
    hour: "05:00",
    workingPhones: 3,
  },
  {
    hour: "06:00",
    workingPhones: 3,
  },
  {
    hour: "07:00",
    workingPhones: 3,
  },
  {
    hour: "08:00",
    workingPhones: 3,
  },
  {
    hour: "09:00",
    workingPhones: 3,
  },
  {
    hour: "10:00",
    workingPhones: 3,
  },
  {
    hour: "11:00",
    workingPhones: 3,
  },
  {
    hour: "12:00",
    workingPhones: 4,
  },
  {
    hour: "13:00",
    workingPhones: 5,
  },
  {
    hour: "14:00",
    workingPhones: 5,
  },
  {
    hour: "15:00",
    workingPhones: 4,
  },
  {
    hour: "16:00",
    workingPhones: 4,
  },
  {
    hour: "17:00",
    workingPhones: 3,
  },
  {
    hour: "18:00",
    workingPhones: 3,
  },
  {
    hour: "19:00",
    workingPhones: 3,
  },
  {
    hour: "20:00",
    workingPhones: 3,
  },
  {
    hour: "21:00",
    workingPhones: 3,
  },
  {
    hour: "22:00",
    workingPhones: 3,
  },
  {
    hour: "23:00",
    workingPhones: 3,
  },
];

const chartConfig = {
  workingPhones: {
    label: "working phones ",
  },
} satisfies ChartConfig;

const DataLineChart = () => {
  return (
    <ResponsiveContainer>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
          <Area
            type="monotone"
            dataKey="workingPhones"
            stroke="var(--color-workingPhones)"
            fill="url(#colorUv)"
          />
          <CartesianGrid />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1ed760" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#1ed760" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="hour"
            tickLine={false}
            tickMargin={5}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </AreaChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
};

export default DataLineChart;
