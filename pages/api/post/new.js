import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  console.log("session: " + session);

  if (session) {
    request.body.author = session.user.email;
  } else {
    request.body.author = null;
  }

  if (request.method === "POST") {
    if (request.body.title === null) {
      return response.status(500).json("No title");
    }

    const db = (await connectDB).db("forum");
    await db.collection("post").insertOne(request.body);

    // _id: auto generated
    // return response.status(200).json('Save Success')
    return response.redirect(302, "/list");
  }
}
