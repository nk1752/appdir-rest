import LastNameCard from "../components/lastNameCard";

export default function NameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className=" flex flex-col overflow-y-hidden ">
        
         <div >
            <LastNameCard />
         </div>
         <div >
            { children }
         </div>
        
      </div>
    </div>      
        
  );
}