import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export function Graph({ amounts: moneys, isLoadedAmounts, ...props }) {
  const [amounts, setAmounts] = useState([]);
  const [state, setState] = useState();
  useEffect(() => {
    setState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        },
      },
      series: props.series,
    });
  }, [moneys, isLoadedAmounts, props.series]);
  //   console.log(
  //     amounts.map((amount) => parseInt(amount.out)),
  //     "gga"
  //   );
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          {state && (
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height="300"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Graph;
