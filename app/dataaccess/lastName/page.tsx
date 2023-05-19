import { cookies } from 'next/headers';

async function getUserById() {
    const cognitoId = process.env.COGNITO_ID;

    const cookieStore = cookies();

    const accessToken = cookieStore.get('token');
    const jwtToken = accessToken?.value;

    const user = cookieStore.get('user');
    const currentUser = user?.value;

    console.log('accessToken: ', accessToken)
    console.log('jwt: ', jwtToken)

    let url = ""

    if (cognitoId && currentUser) {
        url = cognitoId + currentUser;
    }
    else
        return "fetch url error"

   
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            }
        });
         
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }   

    return res.json();
}

export default async function LastNameHome(props: any) { 

    console.log(props)
    const obj = await getUserById();
    const data = JSON.stringify(obj, null, 2)
    console.log(data)

    return (
        <main className=" bg-black text-green-400 font-mono text-lg min-h-screen ">
            {data}
        </main>
    )
}