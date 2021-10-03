import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";

const Login = () => {
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

  const [error, setError] = useState(null);

  const { signIn }: any = useAuth();
  const history = useHistory();

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { error } = await signIn({ email, password });

    if (error) return setError(error);

    history.push("/");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
