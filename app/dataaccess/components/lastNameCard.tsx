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
      
       <form >
          <label htmlFor="lastname">Last name:</label>
          
          <button type="submit">Submit</button>
      </form>
        
    </div>
  );
}
