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
    <div className="form">
    <div className="form__auth">
      <form onSubmit={handleSubmit}>
        <input id="input-email" type="email" placeholder="Write your Email" ref={emailRef} />
        <input id="input-password" type="password" placeholder="Write your Password" ref={passwordRef} />
        <br />
        <button type="submit" className="button__blue">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
