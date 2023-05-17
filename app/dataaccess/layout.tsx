import Sidebar from "./sidebar";
import GetData from "./name/getdata";


export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className=" flex flex-row gap-x-1">
        
        <div className=" w-1/12 bg-black">
          <Sidebar />
        </div>

        <div className=" w-4/12 bg-black">
          <GetData />
        </div>
         
        <div className=" w-7/12 bg-black">
            { children }

         </div>

         
        
        
      </div>
    </div>
    
        
            
        
  );
}