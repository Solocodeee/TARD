"use client";

import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartComponent = () => {
  const [state] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [50, 30, 20],
    options: {
      chart: {
        type: "donut",
        width: "100%",
      },
      labels: ["Sale", "Distribute", "Return"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "80%",
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: "70%",
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              offsetY: 10,
              show: true,
            },
          },
        },
      ],
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetY: 10,
        show: true,
      },
    },
  });

  return (
    <div className="bg-white py-20 flex justify-center items-center">
      <div className="w-full max-w-[447px] h-auto bg-white">
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="donut"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
