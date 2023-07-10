import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method === "POST") {
    let session = await getServerSession(request, response, authOptions);
    if (session === null) {
      return response.status(401).json("Unauthorized");
    }
    const db = (await connectDB).db("forum");
    let find = await db
      .collection("post")
      .findOne({ _id: new ObjectId(request.body) });

    if (find.author === session.user.email) {
      let result = await db
        .collection("post")
        .deleteOne({ _id: new ObjectId(request.body) });
      return response.status(200).json("Delete Done");
    } else {
      return response.status(500).json("Only Author can delete");
    }
  }
  return response.status(500).json("Login is required");
}
