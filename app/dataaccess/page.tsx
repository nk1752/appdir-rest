
async function getStatus() {

    const apiServerUrl = process.env.API_SERVER_URL;
    
  
  const url = apiServerUrl + "/status";
  console.log('>>>>>>>>> fetch url >>>>>>>> ', url);

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": 'text/plain',
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    //throw new Error('Failed to fetch data');
    throw new Error("Failed to fetch data");
  }

  //console.log('>>>>>>>>> analyze >>>>>>>>')
  //console.log('>>>>>>>>> body >>>>>>>>', await res.body)
  //console.log('>>>>>>>>> headers >>>>>>', await res.headers)
  //console.log('>>>>>>>>> status >>>>>>>>', await res.status)


  return await res.text();
}

export default async function DataAccessHome() {

    //const data = await getStatus();
    //console.log('=========obj==========>',data);

    

    return (
      <div className="flex flex-col h-[calc(100vh-96px)] items-center place-content-center">
        <div className=" bg-gray-700 text-amber-500 w-50 min-h-[10%] p-8 rounded-lg shadow-xl">
            Hello
        </div>
        
      </div>
    );
 
}
