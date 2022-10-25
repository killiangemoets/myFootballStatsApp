import styled from "styled-components";

// import { Chart as ChartJS } from "chart.js/auto";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

export const DoughnutChart = styled(Doughnut)`
  width: 26rem !important;
  height: 26rem !important;
`;
