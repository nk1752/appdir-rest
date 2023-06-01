import { cookies } from "next/headers";

async function getUserByIdRange(id1: String, id2: String) {
  if (!id1 || !id2) return;

  const cookieStore = cookies();

  const accessToken = cookieStore.get("jwtToken");
  const jwtToken = accessToken?.value;
  //console.log('jwtToken ====>', jwtToken)

  const url = "http://localhost:8080/api/user?id1=" + id1 + "&id2=" + id2;

  const res = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwtToken,
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

export default async function RangeHome({
  searchParams,
}: {
  searchParams: { id1: String; id2: String };
}) {
  const id1 = searchParams.id1;
  const id2 = searchParams.id2;

  console.log('>>>> searchParams >>>> ',searchParams)

  if (id1 && id2) {
    const obj = await getUserByIdRange(id1, id2);

    console.log('>>>> obj >>>> ',obj)

    const data = obj.map((user: any) => (
      <li key={user.id}>
        <div>
          id: {user.id}
          <br />
          first name: {user.firstName}
          <br />
          last name: {user.lastName}
          <br />
          account id: {user.accountId}
          <br />
          <br />
        </div>
      </li>
    ));

    return (
      <div className=" bg-black text-green-400 font-mono min-h-screen">
        <ul>{data}</ul>
      </div>
    );
  } else {
    return <div>Ready to search...</div>;
  }
}
