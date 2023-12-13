import { useState } from "react";

export default function FormLoginComponent(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Login");
    const inputLoginUser = {
      username,
      password,
    };
    console.log(inputLoginUser);
  };
  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Username"
          aria-label="default input example"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          aria-label="default input example"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <br />
      </form>
      <button onClick={handleLogin} className="btn btn-warning">
        Login
      </button>
    </>
  );
}
