import { cookies } from 'next/headers';

//export const dynamic = 'force-dynamic';

async function getUserByLastName(lastname: String) {

    if (!lastname) return;
    
    const cognitoId = process.env.COGNITO_ID;
    const cookieStore = cookies();

    const accessToken = cookieStore.get('jwtToken');
    const jwtToken = accessToken?.value;
    //console.log('jwtToken ====>', jwtToken)

    const user = cookieStore.get('currentUser');
    const currentUser = user?.value;
    //console.log('curretUser ====>', currentUser)
     
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    //const url = process.env.API_SERVER_URL +  "/api/user?lastname=" + lastname;
    const url = "http://pocvivahealth.com:8080" +  "/api/user?lastname=" + lastname;
    //console.log('fetch url:',url)
    
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'force-cache',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken,
            }
        });
    
    //console.log('response before error checking',res);     
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        //throw new Error('Failed to fetch data');
        throw new Error('Failed to fetch data');
    }   

    //const users = await res.json();
    //console.log(res);

    return res.json();
}

export default async function LastNameHome({
    searchParams
}: {
    searchParams:{lastname: String}
}) {

    interface User {
        id: number
        lastName: String
        firstName: String
        accountId: number
      }
    
    const lastname = searchParams.lastname;
    if (lastname) {
        
        const obj = await getUserByLastName(lastname);   
        const data = obj.map((user: User) =>    
           <li key={user.id.toString()}>
                <div >
                    id: {user.id}<br />
                    first name: {user.firstName}<br />
                    last name: {user.lastName}<br />
                    account id: {user.accountId}<br/><br />
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