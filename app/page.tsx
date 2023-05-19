
export default function Home() {
  return (
    <main className="flex w-full flex-row gap-1 h-[calc(100vh-96px) ">
      <div className=" bg-gray-500 w-1/12 border-double border-4 border-pink-500 text-white">
        <h1>sidebar</h1>
      </div>

      <div className=" flex flex-col w-11/12">
        
        <div className=" h-1/3 border-double border-4 border-sky-500 text-white">
          <h1>server</h1>
        </div>
       
        <div className=" h-2/3 min-w-full border-double border-4 border-purple-500 text-white">
          <h1>client</h1>
        </div>
      
      </div>
    </main>
  );
}
