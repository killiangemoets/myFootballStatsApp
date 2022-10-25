import { FC } from "react";
import { DoughnutChart } from "./donutDiagram.style";

import type { ChartData, ChartOptions } from "chart.js";

type DonutDiagramProps = {
  data: {};
};

const DonutDiagram: FC<DonutDiagramProps> = ({ data }) => {
  const zones = Object.keys(data);
  let counts = Object.values(data) as number[];

  const options: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const chartData: ChartData<"doughnut"> = {
    labels: zones,
    datasets: [
      {
        label: "Crosses positions",
        data: counts,

        backgroundColor: ["#848e78", "#b0bea0", "#e7f2d9"],
        borderColor: ["#585f50"],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <DoughnutChart data={chartData} options={options} />
    </div>
  );
};

export default DonutDiagram;
