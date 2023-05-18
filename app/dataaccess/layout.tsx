import Sidebar from "./components/sidebar";
import GetData from "./lastName/getdata";


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
          <div className="h-1/3">
            { children }
          </div>
          <div className="h-2/3">
            <GetData />
          </div>
        </div>
      </div>
  );
}