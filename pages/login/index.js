import { useState } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const loginHandler = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    const result = await signIn("credentials", { ...payload, redirect: false });
  };
  return (
    <div>
      <div>Login</div>
      <form onSubmit={loginHandler}>
        <label>email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Login;
