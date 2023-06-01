import { cookies } from "next/headers";
import IdCard from "../components/idCard";

async function getUserById(id: String) {
  
    if (!id) return;

    const cookieStore = cookies();

    const accessToken = cookieStore.get('jwtToken');
    const jwtToken = accessToken?.value;
    //console.log('jwtToken ====>', jwtToken)

  const url = "http://localhost:8080/api/user?id=" + id;

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      'Authorization': 'Bearer ' + jwtToken,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    //throw new Error('Failed to fetch data');
    throw new Error("Failed to fetch data");
  }

  //const users = await res.json();

  return res.json();
}

export default async function IdHome({
  searchParams,
}: {
  searchParams: { id: String };
}) {

  const id = searchParams.id;
  
  if (id) {
    const obj = await getUserById(id);

    return (
      <div className=" bg-black text-green-400 font-mono min-h-screen">
        <ul>
            <li>id: {obj.id}</li>
            <li>first name: {obj.firstName}</li>
            <li>last name: {obj.lastName}</li>
            <li>account id: {obj.accountId}</li>
            <br />
        </ul>
      </div>
    );
  } else {
    return <div>Ready to search...</div>;
  }
}
