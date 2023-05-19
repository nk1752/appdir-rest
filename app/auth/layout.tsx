import Sidebar from "./components/sidebar"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className=" flex flex-row">
          
            <div className=" flex flex-col w-1/12 ">
                <Sidebar />
            </div>
  
            <div className=" flex flex-col w-11/12 ">
                { children }
            </div>
          
        </div>
      </div>

    )
  }
