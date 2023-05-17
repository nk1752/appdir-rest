import Sidebar from "../sidebar";
import GetData from "./getdata";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className=" flex flex-row space-x-1 space-y-1 overflow-y-hidden ">
        
         <div className=" w-4/12 bg-black">
            { children }
         </div>
        
        
        
        
      </div>
    </div>
    
        
            
        
  );
}