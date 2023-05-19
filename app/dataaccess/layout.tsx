import Sidebar from "./components/sidebar";


export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className=" flex flex-row h-[calc(100vh-96px)]">
        
        <div className=" w-1/12 ">
          <Sidebar />
        </div>
        
        <div className=" flex flex-col w-11/12">
          
            { children }
            
        </div>
      </div>
  );
}