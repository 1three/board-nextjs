import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) {
    console.log(request.query)
    try {
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.query._id) })
        console.log(result)
    } catch (error) {
        return response.status(500).json('Error')
    }
    return response.status(200).json('Delete Done')
}