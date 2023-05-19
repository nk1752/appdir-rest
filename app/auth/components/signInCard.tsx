'use client'

import { setCookie } from "cookies-next";
import { useState } from "react";
import {Amplify, Auth} from 'aws-amplify'
import config from "@/cognito/cognito-config";

Amplify.configure(config)

export default function SignInCard() {

    const [code, setCode] = useState('')
    const [jwtToken, setJwtToken] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const [cognitoUser, setCognitoUser] = useState(null)

    function handleConfirmSignIn() {
        
        setCookie('token', jwtToken, {
            httpOnly: false,
            secure: false,
          })
    }

    async function handleSignIn() {
        try {
            const cognitoUser = await Auth.signIn(username, password);
            
                setCognitoUser(cognitoUser);
                //localStorage.setItem('cognitoUser', JSON.stringify(cognitoUser))
            
        }   catch (error) {
                console.log('error signing in =>', error);
            }
    }
    

    return (

        <div className=" bg-slate-100" > 
            <form  className=" bg-white" >
                
                <h2>SIGN IN</h2><br />
                <label>Username: <input  type="text" value={username}  onChange={(e) => setUsername(e.target.value)} />  </label><br />
                <label>Password: <input  type="text" value={password}  onChange={(e) => setPassword(e.target.value)} />  </label><br /><br />
                <button type='button' onClick={ handleSignIn }>Sign In</button><br /><br /><br />

                <label>MFA Code: <input  type="text" value={code}  onChange={(e) => setCode(e.target.value)} />  </label><br /><br />
                <button type='button' onClick={ handleConfirmSignIn }>Verify Code</button><br />
          
            </form>
        </div>

    )
}

