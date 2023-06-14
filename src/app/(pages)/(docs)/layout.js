import DocsNav from "@/app/components/Docs/DocsNav";
export default function layout({ children }) {
  
  return (
    <>  
      <div className="flex overflow-y-hidden">
        <div className="flex w-1/5 bg-white shadow overflow-y-auto">
          <DocsNav />
        </div>
        <div className="flex flex-col w-4/5 my-3 mx-3 px-2 overflow-y-auto">{children}</div>
      </div>
    </>
  );
}
