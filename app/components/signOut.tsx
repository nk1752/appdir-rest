'use client'

import { SignOutUser } from "@/cognito/auth"


export default function SignOut() {

    function handleSignOut() {

        SignOutUser()
        alert('signing out...')
    
    }

    return (
        
        <button
            className="ring ring-offset-1 ring-blue-800 w-24 h-10 bg-gray-900 rounded-md"
            onClick={handleSignOut}
            >
            sign out
        </button>
   
    )
}