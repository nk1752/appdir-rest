'use client'

import {Amplify, Auth} from 'aws-amplify'
import config from '@/cognito/cognito-config'

Amplify.configure(config)


export default function SignOut() {

    function handleSignOut() {
        SignOut()
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