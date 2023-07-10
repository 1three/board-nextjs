import { connectDB } from "@/util/database";

// export const revalidate = 60;

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  // await fetch('/url', { cache: 'force-cache' }) === await fetch('/url')
  // await fetch('/url', { cache: 'no-store' }) // No cache
  // await fetch('/url', { next: { revalidate: 60 } }) // Update cache data Every 60s

  return <div></div>;
}
