import fetch from "node-fetch";

export const dynamic = 'force-dynamic';

async function getUserByLastName(go: String) {

    if (!go) return;
    
    
    const url = "http://localhost:8080" +  "/status";
    console.log('fetch url:',url)
    
    const res = await fetch(url, {
        method: 'GET',
        headers: { 
            'Content-Type': 'text/plain',
            
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

    return res.text();
}

export default async function LastNameHome({
    searchParams
}: {
    searchParams:{go: String}
}) {

    
    
    const go = searchParams.go;
    if (go) {
        
        const data = await getUserByLastName(go);   
        
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