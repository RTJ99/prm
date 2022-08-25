import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export default function Donut(props) {
  const [state, setState] = React.useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Assigned", "Not Assigned", "Completed"],
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
      type="donut"
      width="350"
    />
  );
}
