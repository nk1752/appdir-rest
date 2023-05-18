import { useRouter } from "next/router";
import { useState } from "react";


export default function LastNameCard() {

    const [lastName, setLastName] = useState('')
    const router = useRouter();

    function handleSubmit() {


        const url = "/lastName?lastName=" + lastName;
        router.push(url)
        

    }

    return (
        <div>
            <form  className=" bg-slate-50">
                
            <div>
                <form  className={" bg-slate-400"} >
                    <p>Find By User Last Name</p><br />
                    <label>Last Name: <input  type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />  </label><br /><br />
                    <button
                        className=" ring ring-offset-2 ring-gray-900 w-24 h-10 bg-gray-400 text-black font-bold rounded-md "
                        type='button'
                        onClick={ handleSubmit }
                    >Submit
                    </button><br /><br />
                </form>
            </div>
          
            </form>

        </div>
    )
}