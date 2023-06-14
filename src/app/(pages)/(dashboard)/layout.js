import DashboardNav from "@/app/components/Dashboard/DashboardNav";

export default function layout({ children }) {
  
  return (
    <>  
      <div className="flex overflow-y-hidden h-[85vh] overflow-hidden">
        <div className="flex w-1/5 bg-white border-r overflow-y-hidden">
          <DashboardNav />
        </div>
        <div className="flex flex-col w-4/5 ml-3 px-2 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
