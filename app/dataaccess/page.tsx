async function checkHealth() {
    //const url = "http://api.weatherapi.com/v1/current.json?key=ef50495ff7bd48708b0142219232003&q=" + 'London' + "&aqi=yes"
    const url = "http://localhost:8080/health"

    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
            //"Content-Type": "application/json",
            "Content-Type": "text/html",
            "charset": "UTF-8",
        },
    });
  
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    //console.log(res)

    return res
}

export default async function Page() {

   

    console.log("***********************")
    const obj = await checkHealth();
    console.log(obj)
    const msg = obj.body
    console.log(msg);
        
    
    //  JSON.stringify(obj.location.name) + JSON.stringify(obj.location.country);
    

    if (obj) {
        return <div>msg...</div>
    }
    else {
        return <div>ready to search...</div>
    }
 
}
