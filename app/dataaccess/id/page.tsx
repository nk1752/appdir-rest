
import { cookies } from 'next/headers';
import IdCard from '../components/idCard';

async function getUserById(id: String) {

    if (!id) return;
    
    
    const url = "http://localhost:8080/api/user?id=" + id;
        
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

export default async function IdHome({
    searchParams
}: {
    searchParams:{id: String}
}) {

    console.log(searchParams)
    
    const id = searchParams.id;

    if (true) {

        console.log('I am IF')

        const obj = await getUserById(id); //<<<<<<<<<<------
        const data = JSON.stringify(obj, null, 2)

        console.log('server-server-server-server-server-server-server')
        console.log(data) 

        return <main>{data}</main>;
    }
        else {
            return <main>city server component ready to search...</main>
        }    
}