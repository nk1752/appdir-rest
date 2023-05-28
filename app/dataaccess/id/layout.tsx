import IdCard from "../components/idCard";

export default function IdLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <main className=" flex flex-row h-[calc(100vh-96px)] min-w-full">
          <div className=" w-1/2">
            <IdCard />
          </div>
          <div className=" bg-black text-green-500 border-double border-8 border-gray-700 w-1/2 pl-6 h-[calc(100vh-96px)] overflow-auto">
            {children}
          </div>
        </main>
      );
    }