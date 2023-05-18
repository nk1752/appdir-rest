import Sidebar from "./components/sidebar"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className=" flex flex-row gap-x-1 border-2 border-gray-500 border-dashed ">
          
            <div className=" w-1/12 bg-black">
                <Sidebar />
            </div>
  
           
            <div className=" w-11/12 bg-black">
                { children }
            </div>
          
        </div>
      </div>

    )
  }
