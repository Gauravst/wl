import React from "react";
import DashboardCard from "@/app/components/Dashboard/DashboardCard";

export default function DashPage() {
  return (
    <>
      <div className="mb-6" key="dashboard">
        <h2 className="text-2xl my-3 text-gray-700 font-bold">Dashboard</h2>
      </div>
      <div className="grid grid-cols-4 gap-x-4">
        <DashboardCard title="Pages" />
        <DashboardCard title="Forms" />
        <DashboardCard title="Emails" />
        <DashboardCard title="Emails" />
      </div>
    </>
  );
}
