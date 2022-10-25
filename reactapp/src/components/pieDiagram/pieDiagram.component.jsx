import { PieChart } from "./pieDiagram.style";

const PieDiagram = ({ data }) => {
  const zones = Object.keys(data);
  let counts = Object.values(data);

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const chartData = {
    labels: zones,
    datasets: [
      {
        label: "Crosses positions",
        data: counts,

        backgroundColor: ["#fcfdfa", "#e7f2d9", "#b0bea0", "#848e78"],
        borderColor: ["#585f50"],

        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <PieChart data={chartData} options={options} />
    </div>
  );
};

export default PieDiagram;
