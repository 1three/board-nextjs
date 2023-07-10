import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  let session = await getServerSession(request, response, authOptions);
  if (request.method === "POST") {
    request.body = JSON.parse(request.body);

    let save = {
      content: request.body.comment,
      parent: new ObjectId(request.body._id),
      author: session.user.email,
      nickname: session.user.name,
    };
    const db = (await connectDB).db("forum");
    await db.collection("comment").insertOne(save);

    return response.status(200).json({ content: save.content });
  }
}
