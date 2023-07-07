import { connectDB } from "@/util/database"

export default async function handler(request, response) {
    if(request.method === 'POST') {
        console.log(request.body)
        if(request.body.userId === null || request.body.userPw === null) {
            return response.status(500).json('No ID or Password')
        }

        try {
            const db = (await connectDB).db("forum")
            await db.collection('register').insertOne(request.body)
            
            // _id: auto generated
            // return response.status(200).json('Save Success')
            return response.status(200).json('Join success')
        } catch (error) {
            console.log(error)
            return response.status(500).json('Bad Request')
        }
    }
}