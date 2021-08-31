import React from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import DataResearch from "../partials/DataResearch";
import DashboardFeaturesHome from "../partials/DashboardFeaturesHome";

export default function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header className='relative bg-gray-700' />
      <DataResearch />
      <DashboardFeaturesHome />
    </div>
  );
}
