import { useState } from "react";
import { signup } from "../../client/request";
import { useRouter } from "next/router";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    const result = await signup(payload);
    // console.log({ result });

    if (result.hasError) {
      setErrorMessage(result.errorMessage);
    } else {
      setErrorMessage(null);
      setName("");
      setEmail("");
      setPassword("");
      router.replace("/login");
      // console.log(result);
    }
  };

  return (
    <div>
      <div>Signup</div>
      <form onSubmit={signupHandler}>
        {errorMessage && <p>{errorMessage}</p>}
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
export default Signup;
