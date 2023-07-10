"use client";

import Link from "next/link";
// import DetailLink from "./DetailLink"

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((current, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/detail/${current._id}`}>
              <h4>{current.title}</h4>
            </Link>
            <Link href={`/edit/${current._id}`}>✏️</Link>
            <span
              onClick={(e) => {
                // URL parameter: GET
                // fetch('/api/temp/threeKim')
                // fetch(`/api/delete/${current._id}`)

                // Query String: GET
                // fetch('/api/test?name=three&age=23')
                // fetch(`/api/delete/test?_id=${current._id}`)

                fetch("/api/post/delete", {
                  method: "POST",
                  body: current._id,
                })
                  .then((result) => result.json())
                  .then(() => {
                    e.target.parentElement.style.opacity = 0;
                    // e.target: <span>
                    // e.target.parentElement: <div>
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  });

                // fetch - then
                // fetch(No Refresh) - form(always Refresh)
                // then(() => {}) : Run code when request completes
              }}
            >
              {" "}
              🗑️{" "}
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
