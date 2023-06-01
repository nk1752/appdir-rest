async function getData(city: String) {
  
    if (!city) return;

    const url = "http://api.weatherapi.com/v1/current.json?key=ef50495ff7bd48708b0142219232003&q=" + city + "&aqi=yes"
    
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
   
    return res.json();
  }
   
export default async function Page({
    searchParams
}: {
    searchParams:{city: String}
}) {

    const city = searchParams.city;
    if (city) {
        
        
    
        const obj = await getData(city);
        console.log(obj)
        
        const data = JSON.stringify(obj)
        console.log(data)

        return (
            <main>
                <div>{data}</div><br />
                <div>
                    <h1>{obj.location.name} is located in {obj.location.country}</h1>
                    <p>current temperature: {obj.current.temp_f} F</p>
                    <p>current wind speed: {obj.current.wind_mph} mph</p>
                    <p>current wind direction: {obj.current.wind_dir} degree</p>
                    <p>current wind speed: {obj.current.wind_mph} mph</p>
                    <p>current wind speed: {obj.current.wind_mph} mph</p>
                </div>
                
            </main>
        );
    }
        else {
            return <main>City server component ready to search...</main>
        }    
}