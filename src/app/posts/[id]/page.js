import { notFound } from "next/navigation";
import { dbConnect } from "@/utils/dbConnection";

export default async function PostPage({ params }) {
  const db = dbConnect();
  const onePage = (
    await db.query(`SELECT * FROM coaster_rollers WHERE id = ${params.id}`)
  ).rows;

  if (!onePage[0]) {
    notFound();
  }
  return (
    <>
      <h1>This is an individual Roller Coaster: {params.rollerId}</h1>
      {/* I map throught the database  */}
      {onePage.map((item) => (
        <>
          <h2 key={item.id}>{item.name}</h2>
          <p>{item.country}</p>
          <p>{item.height}</p>
        </>
      ))}
    </>
  );
}
