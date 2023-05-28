'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestCard() {
  const [lastname, setLastname] = useState("");
  const router = useRouter();

  function handleSubmit() {
    const url = "/datatest/lastname?lastname=" + lastname;
    router.push(url);
  }

  return (

    <div className=" flex flex-col justify-center items-center bg-sky-500 h-[calc(100vh-96px)]  bg-gradient-to-r from-gray-900 to-gray-700">
        <form className=" flex flex-col bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4">
          
          <label id="lastname">Last Name</label>
          <input className=" bg-gray-700"
              type="text"
              id="lastname"
              value={lastname}
              name="lastname"
              placeholder="last_name_1"
              onChange={(e) => setLastname(e.target.value)}
            />

            <button
            className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-700 rounded-md"
            type="submit"
            onClick={handleSubmit}
            >
            Submit
            </button>
            
        </form>
       
    </div>
  );
}
