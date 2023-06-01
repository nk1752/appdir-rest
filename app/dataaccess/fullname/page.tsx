import { Console } from 'console';
import { cookies } from 'next/headers';
import LastNameCard from '../components/lastNameCard';

async function getUserByFullName(lastname: String, firstname: String) {

    if (!lastname || !firstname) return;
    
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
    const url = "http://localhost:8080/api/user?lastname="+lastname+"&firstname="+firstname;
    console.log('fetch url:',url)
    
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
    searchParams:{lastname: String, firstname: String}
}) {

    console.log(searchParams)
    
    const firstname = searchParams.firstname;
    const lastname = searchParams.lastname;
    if (lastname) {
        
        const obj = await getUserByFullName(lastname, firstname);   
        
        const data = obj.map((user: any) =>    
           <li key={user.id}>
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