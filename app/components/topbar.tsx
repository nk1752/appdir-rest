
import Link from "next/link";

import CurrentUser from "./CurrentUser";
import SignOut from "./signOut";

export default function Topbar() {


    return (
        <div className=" flex flex-row h-24 bg-black border-2 border-gray-500 border-dashed w-full text-green-600 ">
           
            <div className="flex flex-row w-1/12 gap-6 place-items-center justify-center text-1xl">
                <CurrentUser />
            </div>
           
        
            <div className={"flex flex-row w-10/12 gap-6 place-items-center justify-center text-3xl" }>
            
                <h1 ><Link href="/">Home</Link></h1>
                <h1 ><Link href="/auth">Auth</Link></h1>
                <h1 ><Link href="/dataaccess">Data</Link></h1>
                
            </div>

            <div className="flex flex-row w-1/12 gap-6 place-items-center justify-center text-1xl">
                <SignOut />
            </div>

        </div> 
        

    )
    
}