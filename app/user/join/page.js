export default function Join() {
    return (
        <div className="p-20">
            <h3>회원가입</h3>
            <form action="/api/user/join" method="POST">
                <div>
                    <label htmlFor="userId">ID
                    <input name="userId" id="userId" type="text" />
                    </label>
                </div>
                <div>
                    <label htmlFor="userPw">Password
                    <input name="userPw" id="userPw" type="password" />
                    </label>
                </div>
                <button type="submit">JOIN</button>
            </form>
        </div>
    )
}