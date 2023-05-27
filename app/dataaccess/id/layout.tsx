import IdCard from "../components/idCard";

export default function IdLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className=" flex flex-row h-[calc(100vh-96px)] ">     
        <div className=" bg-pink-300 w-2/5">
            <IdCard />
        </div> 

        <div className=" h-2/3 bg-amber-500 ">
            { children }
        </div>   
      </main>
  );
}