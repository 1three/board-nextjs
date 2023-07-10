export default function Join() {
  return (
    <div className="p-20">
      <form action="/api/auth/join" method="POST">
        <h3>회원가입</h3>
        <div>
          <label htmlFor="name">
            이름
            <input name="name" id="name" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            이메일
            <input name="email" id="email" type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            비밀번호
            <input name="password" id="password" type="password" />
          </label>
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
