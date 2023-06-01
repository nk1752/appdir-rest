"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RangeCard() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const router = useRouter();

  function handleSubmit() {
    const url = "/dataaccess/range?id1="+id1+"&id2="+id2;
    router.push(url);
  }

  return (

    <div className=" flex flex-col justify-center items-center bg-sky-500 h-[calc(100vh-96px)]  bg-gradient-to-r from-gray-900 to-gray-700">
      <form className=" flex flex-col bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4">
        
        <label id="id1">from ID</label>
        <input className=" bg-gray-700"
              type="text"
              id="id1"
              value={id1}
              name="id1"
              placeholder="1"
              onChange={(e) => setId1(e.target.value)}
            />
        
        <label id="id2">to ID</label>
        <input className=" bg-gray-700"
              type="text"
              id="id2"
              value={id2}
              name="id2"
              placeholder="10"
              onChange={(e) => setId2(e.target.value)}
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
