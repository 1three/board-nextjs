"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <hr />
      {data.length > 0
        ? data.map((current, index) => (
            <p key={index}>
              {current.nickname} | {current.content}
            </p>
          ))
        : "No comments"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              _id: props._id,
            }),
          });
        }}
      >
        전송
      </button>
    </div>
  );
}
