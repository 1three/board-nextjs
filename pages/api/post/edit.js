import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(request, response) {
    console.log(request.body)
    if(request.method === 'POST') {
        // Exception id
        let change = { title: request.body.title, content: request.body.content }

        if(request.body.title === null) {
            return response.status(500).json('No title')
        }

        try {
            const db = (await connectDB).db("forum")
            await db.collection('post').updateOne({ _id: new ObjectId(request.body._id) }, { $set: change })
            return response.redirect(302, '/list')
        } catch (error) {
            console.log(error)
            return response.status(500).json('Error')
        }
    }
}