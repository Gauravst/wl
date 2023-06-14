import React from "react";

export default function DashboardCard({title}) {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-2 px-3 rounded-md bg-blue-50 shadow h-28">
        <h3 className="text-2xl font-bold mb-2">34</h3>
        <h4 className="text-sm font-semibold text-gray-600">{title}</h4>
      </div>
    </>
  );
}
