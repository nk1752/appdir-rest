import Link from "next/link"

export default function Sidebar() {

    return (       
        <main className=" flex flex-col bg-black text-white h-[calc(100vh-96px)] text-center gap-4 border-4 border-gray-500">
            
            <div className=" text-amber-300">
                <br />
                <h2>Query by</h2>
                <br />
            </div>
            <div>
                <h2><Link href="/dataaccess/id">Id</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/lastName">Last Name</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/firstName">First Name</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/fullName">Full Name</Link></h2>
            </div>
            <div>
                <h2><Link href="/dataaccess/range">Id Range</Link></h2>
            </div>
            
           
        </main>       
    
    );

}