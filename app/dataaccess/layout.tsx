import Sidebar from "./components/sidebar";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" flex flex-row">
        <div className=" flex flex-col w-1/12">
            <Sidebar />
        </div>

        <div className=" flex flex-col w-11/12 ">
            {children}
        </div>
    </main>
  );
}