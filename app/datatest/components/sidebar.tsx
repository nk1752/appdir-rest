import Link from "next/link"

export default function Sidebar() {

    return (
      <main className=" flex flex-col bg-gradient-to-l from-gray-900 to-gray-500 to-gray gap-6 place-items-center justify-center text-stone-100 text-center h-[calc(100vh-96px)]">
        <div className=" text-amber-300">
          <h2>Query by</h2>
        </div>
        <div>
          <h2>
            <Link href="/dataaccess/id">Id</Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link href="/datatest/lastname">Last Name</Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link href="/dataaccess/firstName">First Name</Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link href="/dataaccess/fullName">Full Name</Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link href="/dataaccess/range">Id Range</Link>
          </h2>
        </div>
      </main>
    );

}