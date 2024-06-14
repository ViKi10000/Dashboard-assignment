import React from "react";
import "./main.css";
import Dashboard from "../pages/Dashboard";
import MainNav from "./MainNav";
import { Route, Routes } from "react-router-dom";
import GenearlView from "../pages/GenearlView";
import TimelineView from "../pages/TimelineView";
import Holiday from "../pages/Holiday";
import SalarySlip from "../pages/SalarySlip";
import AuditLog from "../pages/AuditLog";
import JobDescription from "../pages/JobDescription";


function Main() {
  return (
    <main id="main" className="main">
      <MainNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gv" element={<GenearlView />} />
        <Route path="/timeline" element={<TimelineView />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/salarySlip" element={<SalarySlip />} />
        <Route path="/auditLog" element={<AuditLog />} />
        <Route path="/jD" element={<JobDescription />} />
        
      </Routes>
    </main>
  );
}

export default Main;
