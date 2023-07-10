export default async function Write() {
  return (
    <div className="p-20">
      <h3>글 작성</h3>
      {/* form: POST */}
      <form action="/api/post/new" method="POST">
        <div>
          <label htmlFor="title">
            제목
            {/* name: key role */}
            <input
              name="title"
              id="title"
              placeholder="제목을 입력하세요"
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="content">
            본문
            <input
              name="content"
              id="content"
              placeholder="본문을 입력하세요"
            ></input>
          </label>
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
