'use client'

import { deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next'
import {Amplify, Auth} from 'aws-amplify'
import config from '@/cognito/cognito-config'

import { useRouter } from 'next/navigation'



Amplify.configure(config)


export default function SignOut() {

    const router = useRouter();

    async function handleSignOut() {   
             
        
        const so = await Auth.signOut()
        .then((msg) => console.log(msg))
        .catch(() => console.log('error'))
        console.log('sign out', so)
        
        // clear cookies
        deleteCookie('currentUser')
        deleteCookie('jwtToken')    
    }

    //router.refresh();

    return (
        
        <button
            className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-800 rounded-md"
            onClick={handleSignOut}
            >
            sign out
        </button>
   
    )
}