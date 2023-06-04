export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-96px)] items-center place-content-center">
      <div className=" bg-gray-700 text-amber-500 w-50 min-h-[10%] p-8 rounded-lg shadow-xl">
        <div>
          <h2>API_SERVER_URL: {process.env.API_SERVER_URL}</h2>
          <h2>NODE_ENV: {process.env.NODE_ENV}</h2>
          
          
          <h2>PLATFORM: {process.env.PLATFORM}</h2>
          <h2>API_SERVICE: {process.env.API_SERVICE}</h2>
          <h2>nadeem: {process.env.nadeem}</h2>
          
          <h2>H: {process.env.H}</h2>
        </div>
      </div>
    </div>
  );
}
