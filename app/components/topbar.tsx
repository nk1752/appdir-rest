
import Link from "next/link";

import CurrentUser from "./currentUser";
import SignOut from "./signOut";

export default function Topbar() {

    return (
        <div className=" flex flex-row h-24 bg-gradient-to-l from-green-900 to-green-400 w-full text-black ">   
            <div className="flex flex-row w-1/12 gap-6 place-items-center justify-center text-1xl">
                <CurrentUser />
            </div>
            <div className={"flex flex-row w-10/12 gap-6 place-items-center justify-center text-3xl" }>
                <h1 ><Link href="/">Home</Link></h1>
                <h1 ><Link href="../auth">Auth</Link></h1>
                <h1 ><Link href="../dataaccess">Data</Link></h1>
                <h1 ><Link href="../cityLocation">Test</Link></h1>
            </div>
            <div className="flex flex-row w-1/12 gap-6 place-items-center justify-center text-1xl">
                <SignOut />
            </div>
        </div> 
    )
}