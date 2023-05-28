
async function getData(lastname: String) {
  
    if (!lastname) return;

    const url = "http://localhost:8080/api/user?lastname=" + lastname;
    
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
        }
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    
    console.log('response:',res)
    
    return res.json();
  }
   
export default async function Page({
    searchParams
}: {
    searchParams:{lastname: String}
}) {

    const lastname = searchParams.lastname;
  
    if(lastname)  {
        console.log(searchParams)
        console.log(searchParams.lastname)
    
        const obj = await getData(lastname);

        
        const data = obj.map((user: any) => 
           
           <li key={user.id}>
                <div >
                    first name: {user.firstName}<br />
                    last name: {user.lastName}<br /><br/>
                </div>
                               
            </li>  
            
        )
        return (
            <div className="class=overflow-auto ">
                <ul>{data}</ul>
            </div>
            
        )
    }
    else {
        return <main></main>
    }
    
}