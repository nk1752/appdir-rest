'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestCard() {
  const [lastname, setLastname] = useState("");
  const router = useRouter();

  function handleSubmit() {
    const url = "/datatest?lastname=" + lastname;
    router.push(url);
  }

  return (

    // call here async/await
    //<form action="/send-data-here" method="post">

    <div className=" bg-red-200 min-h-full justify-center">
      
        <form className="flex flex-col  bg-sky-300 w-1/12 min-w-min h-48 min-h-full">      
          
          <input
              type="text"
              id="lastname"
              value={lastname}
              name="lastname"
              placeholder="last_name_1"
              onChange={(e) => setLastname(e.target.value)}
            /> 
          
            <button  className="ring ring-offset-2 ring-blue-800 w-20 h-8 bg-gray-500 rounded-md "
                type="button"
                onClick={handleSubmit}
            >
            Submit
            </button>
          
            
        </form>
       
    </div>
  );
}
