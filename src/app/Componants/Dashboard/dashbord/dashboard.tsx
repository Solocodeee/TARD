'use client';

import React from "react";
import Header from "../header/header";
import StateCards from "../StateCardsd/StateCards";
import LineChart from "../DataAnal/dataTable/Datatable";
import AnalyticsChart from "../DataAnal/data-cercle/data-cercle";
import Recent from "../recent orders/Recent";
import TopSelling from "../top selling/TopSelling";

function Dashboard() {
  return (
    <div>
      <Header />
      <StateCards />
      <div className="flex gap-4 mt-5 flex-col sm:flex-row ">
        <div className="flex-1">
          <LineChart />
        </div>
        <div className="flex-1 w-90">
          <AnalyticsChart />
        </div>
      </div>


      <div className="flex gap-4 mt-5 flex-col sm:flex-row ">
        <div className="flex-1">
        <Recent />

        </div>
        <div className="flex-1">
        <TopSelling />

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
