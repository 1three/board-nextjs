import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

    return (
        <div className="p-20">
            <h3>글 수정</h3>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="_id" defaultValue={ result._id } />
                <div>
                    <label htmlFor="title">제목
                    <input name="title" id="title" defaultValue={ result.title } ></input>
                    </label>
                </div>
                <div>
                    <label htmlFor="content">본문
                    <input name="content" id="content" defaultValue={ result.content } ></input>
                    </label>
                </div>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}