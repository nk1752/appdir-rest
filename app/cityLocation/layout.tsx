import CityCard from "./components/cityCard";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className=" flex flex-col h-[calc(100vh-96px)] ">     
        <div className=" h-1/3">
            <CityCard />
        </div> 

        <div className=" h-2/3 bg-amber-500 ">
            { children }
        </div>   
      </main>
  );
}