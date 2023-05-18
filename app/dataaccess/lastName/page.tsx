import { cookies } from 'next/headers';

export default function LastNameHome() {

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


    async function getUserById() {

        try {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
            
                    }
                });
    
                // parses JSON response into native JavaScript objects
                const obj = await response.json();
                //console.log(await obj)
                const data = JSON.stringify(obj, null, 2)
                console.log(data)
                
        } catch (error) {
            console.error("error =>", error)
            
        }   

    }
    
    return (

        <div className=" bg-black text-green-400 font-mono text-lg">

            This is a test
            
        </div>

    )
}