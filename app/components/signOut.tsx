'use client'

import { SignOutUser } from "@/cognito/auth"


export default function SignOut() {

    function handleSignOut() {

        SignOutUser()
        alert('signing out...')
    
    }

    return (
        
        <button
            className="ring ring-offset-2 ring-gray-900 w-24 h-10 bg-gray-400 text-black font-bold rounded-md"
            onClick={handleSignOut}
            >
            sign out
        </button>
   
    )
}