import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export default function Donut(props) {
  const [state, setState] = React.useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  // useEffect(() => {
  //   setState((oldState) => {
  //     return {
  //       ...oldState,
  //       series: [44, 55, 41, 17, 15],
  //       options: {
  //         legend: { position: "top" },
  //         labels: props.labels,
  //       },
  //     };
  //   });
  // }, [props.label, props.series]);
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="pie"
      width="350"
    />
  );
}
