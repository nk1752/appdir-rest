async function getData(lastname: String) {

  if (!lastname) return;

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
   
  export default async function Page({searchParams}: {searchParams:{lastname: String}}) {

    const city = searchParams.lastname;
    if (city) {
      console.log(searchParams)
    console.log(searchParams.lastname)
    
    const obj = await getData(city);
    const data = JSON.stringify(obj)
    console.log(data)

    return <main>{data}</main>;
    }
    else {
      return <main>ready to search...</main>
    }
    
  }