'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CityCard() {
  const [city, setCity] = useState("");
  const router = useRouter();

  function handleSubmit() {
    const url = "/cityLocation?city=" + city;
    router.push(url);
  }

  return (

    // call here async/await
    //<form action="/send-data-here" method="post">

    <div className=" bg-red-200">
      
        <div className="flex flex-col  bg-sky-300 w-1/12 min-w-min h-48 min-h-full">      
          
          <div  className="bg-gray-300 ">
          <input
              type="text"
              id="city"
              value={city}
              name="city"
              placeholder="Birmingham"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>  
          
            
          <div className="flex gap-y-2 space-y-2 justify-center content-center bg-green-300">
            <button  className="ring ring-offset-2 ring-blue-800 w-20 h-8 bg-gray-500 rounded-md "
                type="button"
                onClick={handleSubmit}
            >
            Submit
            </button>
          </div>
            
        </div>
       
    </div>
  );
}
