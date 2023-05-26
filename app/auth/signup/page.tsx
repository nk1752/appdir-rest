'use client'

import {useState} from 'react'

import {Amplify, Auth} from 'aws-amplify'
import config from '@/cognito/cognito-config'

Amplify.configure(config)

export default function SignUpHome() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [code, setCode] = useState('')
    const [mfaType, setMfaType] = useState('SMS_MFA')

    async function handleSignUp() {

        sessionStorage.setItem('nsername', username)
        sessionStorage.setItem('password', password)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('phoneNumber', phone_number)
        

        try {
            const user = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                    phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: false,
                }
            });

            console.log(user);
            
        } catch (error) {
            console.log('error signing up:', error);
          }
   
    }

    async function handleConfirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
          } catch (error) {
              console.log('error confirming sign up', error);
            }
        
    }

    return (
        <div className=" flex flex-col justify-center items-center bg-black h-[calc(100vh-96px)]  bg-gradient-to-r from-gray-900 to-gray-700">
            
            <form  className="flex flex-col  bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4" >
                <div className='  bg-gray-600 text-center'> SIGN UP  </div>
                
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
                    <input className=' bg-gray-800'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>Email
                    <input className=' bg-gray-800'
                        type="email"
                        id='email'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label>Phone Number
                    <input className=' bg-gray-800'
                        type="text"
                        id='phone_number'
                        autoComplete='Phone Number'
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                
                <button className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-700 rounded-md"
                    type='button'
                    onClick={ handleSignUp }>Sign Up
                </button>
            
            </form>  

            <form className=' flex flex-col  bg-gray-800 w-72 p-4 border-4 text-stone-100 gap-4'>
            <div className=' bg-gray-600 text-center'> CODE VERIFICATION </div>
                <label>MFA email code
                    <input className=' bg-gray-800'
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </label>

                <button className="ring ring-offset-2 ring-blue-800 w-24 h-10 bg-gray-700 rounded-md"
                    type='button'
                    onClick={ handleConfirmSignUp }>Verify
                </button>

            </form>

        </div>
    )
}