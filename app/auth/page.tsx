'use client'

import { getCookie } from "cookies-next";
//import { cookies } from 'next/headers';  <--- server only
import { useEffect, useState } from "react"

export default function AuthHome() {
    

    const [currentUser, setCurrentUser] = useState('aaaaa')

   


    function handleClick() {
    
        const user = getCookie('currentUser')
        console.log(user)
        //setCurrentUser(user)
        
      }
  
    return (
      <main className=" text-white ">
        <div className={'text-3xl'}>
          <h1>Auth Main Page</h1>
          <button type="button" onClick={ handleClick }>get user</button>
        </div>
        <div>{currentUser}</div>
      </main>
    )
  }

  
  