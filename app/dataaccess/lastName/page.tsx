import { Console } from 'console';
import { cookies } from 'next/headers';
import LastNameCard from '../components/lastNameCard';

async function getUserByLastName(lastname: String) {

    if (!lastname) return;
    
    //const cognitoId = process.env.COGNITO_ID;
    //const cookieStore = cookies();

    //const accessToken = cookieStore.get('jwtToken');
    //const jwtToken = accessToken?.value;
    //console.log('jwtToken ====>', jwtToken)

    //const user = cookieStore.get('currentUser');
    //const currentUser = user?.value;
    //console.log('curretUser ====>', currentUser)
  

    //let url = ""

 //   if (cognitoId && currentUser) {
   //     url = cognitoId + currentUser;
   // }
   // else
     //   return "fetch url error"

   
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const url = "http://localhost:8080/api/user?lastname=" + lastname;
    console.log(url)
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer ' + accessToken,
            }
        });
         
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        //throw new Error('Failed to fetch data');
        throw new Error('Failed to fetch data');
    }   

    //const users = await res.json();

    return res.json();
}

export default async function LastNameHome({
    searchParams
}: {
    searchParams:{lastname: String}
}) {

    console.log(searchParams)
    
    const lastname = searchParams.lastname;
    if (lastname) {
        
        const obj = await getUserByLastName(lastname);   
        
        const data = obj.map((user: any) =>    
           <li key={user.id}>
                <div >
                    first name: {user.firstName}<br />
                    last name: {user.lastName}<br /><br/>
                </div> 
            </li>  
        )
        

        return (
            <div className=" bg-black text-green-400 font-mono min-h-screen">
                
                
                <ul>{data}</ul>
            </div>
        )
    }
        else {
            return <div>Ready to search...</div>
        }
}