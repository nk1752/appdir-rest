'use client'

import { useState, useEffect } from 'react'
import GetUserById from './getUserById'

export default function IdHome() {

    const [data, setData] = useState('**')
    const [id, setId] = useState('1')
    const [service, setService] = useState('')

    function getUserById() {
        return 'user id'
    }

    return (

        <div>
            <form className=' text-2xl text-white bg-slate-400'>
                
                <h2>Find By User Id</h2><br />
                <label>ID: <input  type="number" value={id}  onChange={(e) => setId(e.target.value)} /></label><br />
        
                <button type='button' onClick={ getUserById }>Submit</button><br /><br /><br />

            </form>
        </div>

    )
}