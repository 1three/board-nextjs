import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) {
    if(request.method == 'POST') {
        const db = (await connectDB).db("forum")
        let result = await db.collection('post').deleteOne({ _id: new ObjectId(request.body._id)})
        console.log(result)
        
        return response.status(200).json('Delete Done')
    }
    return response.status(500).json('Error')
}