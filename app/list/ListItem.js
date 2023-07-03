'use client'

import Link from "next/link"
// import DetailLink from "./DetailLink"

export default async function ListItem({result}) {

  return (
    <div>
      { result.map((current, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${current._id}`}><h4>{ current.title }</h4></Link>
            <Link href={`/edit/${current._id}`}>✏️</Link>
            <span onClick={() => {
                fetch('/api/post/delete', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify({ _id: current._id }) })
                // fetch(No Refresh) - form(always Refresh)
                // then(() => {}) : Run code when request completes
            }}> 🗑️ </span>
            {/* <DetailLink /> */}
            <p>1월 1일</p>
          </div>
        )
      })}
    </div>
  )
}