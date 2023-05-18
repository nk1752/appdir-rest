import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-rows-2 gap-1 h-[calc(100vh-100px)]">
      
      <div className="border-double border-4 border-sky-500">
        <h1 >DIV 1</h1>
      </div>

      <div className=" bg-purple-300">
        <h1>div 2</h1>
      </div>
    
    </main>
  )
}
