
export default function DataAccessHome() {
  
  return (
    <main className=" text-white ">
      <div className={'text-3xl'}>
        <h1>Data Access Main Page</h1>
        <h1>{process.env.SERVER_MESSAGE}</h1>
      </div>
    </main>
  )
}
