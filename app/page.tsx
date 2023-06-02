
export default function Home() {
  return (
    <main className="flex w-full flex-row gap-1 h-[calc(100vh-96px) ">
      <div className=" bg-gray-500 w-1/12 border-double border-4 border-pink-500 text-white">
       <h2>{process.env.API_SERVER_URL}</h2> 
       <h2>{process.env.NODE_ENV}</h2> 
       <h2>{process.env.TZ}</h2> 
       <h2>{process.env.NEXT_PUBLIC_API_SERVER_URL}</h2> 
      
      </div>
    </main>
  );
}
