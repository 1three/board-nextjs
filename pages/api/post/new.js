import { connectDB } from "@/util/database"

export default async function handler(request, response) {
    if(request.method == 'POST') {
        if(request.body.title == '' || request.body.title == null) {
            return response.status(500).json('No title')
        }

        try {
            const db = (await connectDB).db("forum")
            await db.collection('post').insertOne(request.body)
            
            // _id: auto generated
            // return response.status(200).json('Save Success')
            return response.redirect(302, '/list')
        } catch (error) {
            console.log(error)
            return response.redirect(500, '/write')
        }
    }
}