import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "../partials/Header";
import DataResearch from "../partials/DataResearch";

function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />
      <DataResearch />
    </div>

export default Dashboard
