const { connectDB } = require("@/util/database");
const { ObjectId } = require("mongodb");

const handler = async (request, response) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("comment")
    .find({ parent: new ObjectId(request.query.id) })
    .toArray();
  response.status(200).json(result);
};

export default handler;
