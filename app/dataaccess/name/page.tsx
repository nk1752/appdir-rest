'use client'

import { useState, useEffect } from 'react'

export default function NameHome() {

    const [data, setData] = useState('**')
    const [id, setId] = useState('1')
    const [service, setService] = useState('')

    function getUserById() {
        return 'user name'
    }

    return (

        <div>
            <form className=' text-2xl'>
                
                <h2>Find By User Id</h2><br />
                <label>ID: <input  type="number" value={id}  onChange={(e) => setId(e.target.value)} />  </label><br />
        
                <button type='button' onClick={ getUserById }>Submit</button><br /><br /><br />

            </form>
        </div>

    )
}