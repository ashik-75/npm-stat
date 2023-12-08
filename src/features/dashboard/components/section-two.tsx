import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 21",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Mar 21",
    Sales: 2890,
    Profit: 1198,
  },
  {
    Month: "Apr 21",
    Sales: 3890,
    Profit: 2398,
  },
  {
    Month: "May 21",
    Sales: 1789,
    Profit: 1298,
  },

  {
    Month: "Jun 22",
    Sales: 2800,
    Profit: 1110,
  },
];

const valueFormatter = (number: number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

export default function SectionTwo() {
  return (
    <Card>
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Sales", "Profit"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        yAxisWidth={60}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}
