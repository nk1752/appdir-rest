import { cookies } from "next/headers";
import IdCard from "../components/idCard";

async function getUserById(id: String) {
  if (!id) return;

  const url = "http://localhost:8080/api/user?id=" + id;

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer ' + accessToken,
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
  console.log(searchParams);

  const id = searchParams.id;
  if (id) {
    const obj = await getUserById(id);

    console.log(obj);

    return (
      <div className=" bg-black text-green-400 font-mono min-h-screen">
        <div>
          id: {obj.id}
          <br />
          first name: {obj.firstName}
          <br />
          last name: {obj.lastName}
          <br />
          account id: {obj.accountId}
          <br />
          <br />
        </div>
      </div>
    );
  } else {
    return <div>Ready to search...</div>;
  }
}
