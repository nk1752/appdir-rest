import LastNameCard from "../components/lastNameCard";

export default function LastNameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" flex flex-row h-[calc(100vh-96px)] ">     
    <div className="h-1/3 w-2/5 bg-sky-600">
        <LastNameCard />
    </div> 

    <div className="h-2/3 h-[calc(100vh-96px) bg-amber-500">
        { children }
    </div>   
  </main>
  );
}