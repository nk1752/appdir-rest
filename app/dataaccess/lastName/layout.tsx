import LastNameCard from "../components/lastNameCard";

export default function LastNameLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" flex flex-col ">
      <div className=" ">
        <LastNameCard />
      </div>

      <div className=" ">{children}</div>
    </main>
  );
}