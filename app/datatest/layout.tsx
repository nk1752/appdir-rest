import TestCard from "./components/testCard";
import Sidebar from "./components/sidebar";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className=" flex flex-row h-[calc(100vh-96px)] ">     

        <div className=" w-1/12">
            <Sidebar />
        </div>
        
            <div className=" bg-black w-11/12">
                { children }
            </div>  
        
      </main>
  );
}