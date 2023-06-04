'use client'

import { useEffect, useState } from 'react'
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from 'next/navigation';

import {Amplify, Auth} from 'aws-amplify'
import config from '@/cognito/cognito-config'

Amplify.configure(config)

export default function SignInHome() {

    const [code, setCode] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    
    const [cognitoUser, setCognitoUser] = useState(null)

    async function handleSignIn() {
        console.log('handleSignIn')
        try {
            const cognitoUser = await Auth.signIn(username, password);
                setCognitoUser(cognitoUser);
                //localStorage.setItem('cognitoUser', JSON.stringify(cognitoUser))
        }   catch (error) {
                console.log('error signing in =>', error);
            }
    }
    
    async function handleConfirmSignIn() {
        try {
            const loggedUser = await Auth.confirmSignIn(cognitoUser, code, 'SMS_MFA')
                
                console.log(loggedUser)
                const jwtToken = loggedUser.getSignInUserSession()?.getAccessToken()?.getJwtToken() || '';  
                const currentUser = loggedUser.username || '';  

                console.log(currentUser)

                setCookie('jwtToken', jwtToken, {
                    httpOnly: false,
                    secure: false,        
                })
                setCookie('currentUser', currentUser)

                alert("Logged In")  
                
                setUser( 'test' );     

            }   catch (error) {
                    console.log('error signing in', error);
                }

                     
    }

    const sec = Date()
    
    return (

        <div className=" flex flex-col justify-center items-center bg-black h-[calc(100vh-96px)]  bg-gradient-to-r from-gray-900 to-gray-700"> 
            
            <form className="flex flex-col  bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4" >
                                    
                    <div className='  bg-gray-600 text-center'> SIGN IN  </div>
                    
                    <label>Username 
                        <input className=' bg-gray-800'
                            type="text"
                            id='username'
                            autoComplete='user name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    
                    <label>Password
                        <input  className=' bg-gray-800'
                            type="password"
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    
                    <button className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-700 rounded-md"
                        type='button'
                        
                        onClick={ handleSignIn }
                        >Sign In
                    </button>
            </form>

            <form className=' flex flex-col  bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4'>
                <div className=' bg-gray-600 text-center'> CODE VERIFICATION </div>
                <label>SMS MFA Code
                    <input className=' bg-gray-800'
                        type="text"
                        id='code'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>
                <button className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-700 rounded-md"
                    type='button'
                    onClick={ handleConfirmSignIn }
                    >Verify Code
                </button>

            </form>

        </div>

    )
}
