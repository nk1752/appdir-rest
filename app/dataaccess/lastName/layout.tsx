import LastNameCard from "../components/lastNameCard";

export default function LastNameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" flex flex-row h-[calc(100vh-96px)] ">     
    <div className="w-2/5">
        <LastNameCard />
    </div> 

    <div className="w-3/5 h-[calc(100vh-96px)">
        { children }
    </div>   
  </main>
  );
}