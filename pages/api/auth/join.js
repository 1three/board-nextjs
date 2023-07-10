import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(request, response) {
  if (request.method === "POST") {
    if (
      request.body.name === "" ||
      request.body.email === "" ||
      request.body.password === ""
    ) {
      console.log("Please fill in all");
      return null;
    }

    const hash = await bcrypt.hash(request.body.password, 10); // 10: encryption
    request.body.password = hash;

    const db = (await connectDB).db("forum");
    await db.collection("register").insertOne(request.body);

    // _id: auto generated
    // return response.status(200).json('Save Success')
    console.log("Welcome to join us");
    return response.status(200);
  }
}
