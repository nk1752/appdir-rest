import Link from "next/link"

export default function Sidebar() {

    return (       
        <main className=" flex  flex-col text-green-500 text-2xl text-center gap-4 ">
            
            <div>
                <br />
                <h2><Link href="/dataaccess/id">by Id</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/name">by Name</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/range">by Id</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/id">New User</Link></h2>
            </div>
            <div>
                <h2>dataaccess</h2>
            </div>
           
        </main>       
    
    );

}