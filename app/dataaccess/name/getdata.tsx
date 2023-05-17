export default function GetData() {

    console.log(process.env.SERVER_MESSAGE)
    
    return (
        <main className='bg-black'>
            <div className=" text-2xl text-white">
                <h1>
                    {process.env.SERVER_MESSAGE}
                </h1>

            </div>
            
        </main>
    )
}