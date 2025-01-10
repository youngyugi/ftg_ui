"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";

import {
  ChartContainer,
  ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

const data = [
  {
    hour: "00:00",
    workingPhones: 20,
  },
  {
    hour: "01:00",
    workingPhones: 25,
  },
  {
    hour: "02:00",
    workingPhones: 31,
  },
  {
    hour: "03:00",
    workingPhones: 31,
  },
  {
    hour: "04:00",
    workingPhones: 20,
  },
  {
    hour: "05:00",
    workingPhones: 22,
  },
  {
    hour: "06:00",
    workingPhones: 26,
  },
  {
    hour: "07:00",
    workingPhones: 32,
  },
  {
    hour: "08:00",
    workingPhones: 36,
  },
  {
    hour: "09:00",
    workingPhones: 48,
  },
  {
    hour: "10:00",
    workingPhones: 52,
  },
  {
    hour: "11:00",
    workingPhones: 36,
  },
  {
    hour: "12:00",
    workingPhones: 40,
  },
  {
    hour: "13:00",
    workingPhones: 71,
  },
  {
    hour: "14:00",
    workingPhones: 69,
  },
  {
    hour: "15:00",
    workingPhones: 72,
  },
  {
    hour: "16:00",
    workingPhones: 72,
  },
  {
    hour: "17:00",
    workingPhones: 72,
  },
  {
    hour: "18:00",
    workingPhones: 72,
  },
  {
    hour: "19:00",
    workingPhones: 60,
  },
  {
    hour: "20:00",
    workingPhones: 63,
  },
  {
    hour: "21:00",
    workingPhones: 58,
  },
  {
    hour: "22:00",
    workingPhones: 48,
  },
  {
    hour: "23:00",
    workingPhones: 0,
  },
];

const chartConfig = {
  workingPhones: {
    label: "working phones",
    color: "#999999",
  },
} satisfies ChartConfig;

const DataLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <AreaChart
        data={data}
        margin={{ top: 25, right: 25, bottom: 0, left: -25 }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ccc" stopOpacity={0.9} />
            <stop offset="95%" stopColor="#ccc" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="workingPhones"
          stroke="var(--color-workingPhones)"
          fill="url(#colorUv)"
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="hour" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
      </AreaChart>
    </ChartContainer>
  );
};

export default DataLineChart;
