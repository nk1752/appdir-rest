'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LastNameCard() {
  const [lastName, setLastName] = useState("");
  const router = useRouter();

  function handleSubmit() {
    const url = "/dataaccess/lastName?lastName=" + lastName;
    router.push(url);
  }
  return (
    <div className=" flex flex-col  ">
      
        <div className=" ">Find By User Last Name</div>
       
        <label>
          Last Name:{" "}
          <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
        </label>
        
        
        <button
          className=" ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-500 rounded-md "
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        
       
    </div>
  );
}
