"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "../data/data";

export interface LinePriceChartType {
  date: string;
  price: number;
}

interface PriceChartType {
  chartData: LinePriceChartType[];
}

export function PriceChart({ chartData }: PriceChartType) {
  const prices = chartData.map((r) => r.price);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        className="m-2 mx-auto"
        width={730}
        height={250}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          tickFormatter={(val) => `$${val}`}
          allowDecimals
          type="number"
          tickCount={5}
          domain={[
            // () => Math.min(...prices) - 1,
            "auto",
            // () => Math.max(...prices) + 1,
            "auto",
          ]}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#000"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
