import React, { useState, useEffect } from "react";

import ReactApexChart from "react-apexcharts";

export function SplineGraph(moneys, isLoadedAmounts, ...props) {
  const [state, setState] = useState();
  useEffect(() => {
    setState({
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2020-09-19T00:00:00.000Z",
            "2020-09-19T01:30:00.000Z",
            "2020-09-19T02:30:00.000Z",
            "2020-09-19T03:30:00.000Z",
            "2020-09-19T04:30:00.000Z",
            "2020-09-19T05:30:00.000Z",
            "2020-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
      series: [
        {
          name: "Completed",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Not Completed",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
    });
  }, [moneys, isLoadedAmounts, props.series]);

  return (
    <div id="chart">
      {state && (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      )}
    </div>
  );
}
