import { connectDB } from "@/util/database"
import Link from "next/link"
// import DetailLink from "./detailLink"

export default async function List() {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
    // console.log(result)

    return (
      <div className="list-bg">
        {
          result.map((current, i) => 
            <div className="list-item" key={i}>
              <h4>{ current.title }</h4>
              <Link href={`/detail/${current._id}`}>페이지 이동</Link>
              {/* <DetailLink /> */}
              <p>1월 1일</p>
            </div>
          )
        }
      </div>
    )
  }