import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { AlertError, AlertSuccess } from "../../../utils/alerts";

interface IFormInputs {
  email: string;
  password: number;
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Register = () => {
  const { signUp }: any = useAuth();
  const history = useHistory();
  const [successStatus, setSuccessStatus] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorText, setErrorText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: IFormInputs) => {
    console.log(data);
    const { error } = await signUp(data);
    if (!error) {
      setErrorStatus(false);
      setSuccessStatus(true);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }

    console.log(error.message);
    setErrorText(error.message);
    setSuccessStatus(false);
    setErrorStatus(true);
  };

  return (
    <div className="form">
      <div className="form__auth">
        {successStatus === true && (
          <div className="alerts">
            <AlertSuccess text="Register successfully!" />
          </div>
        )}
        {errorStatus && (
          <div className="alerts">
            <AlertError text={errorText} />
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Write your Email" />
          <p>{errors.email?.message}</p>

          <input
            type="password"
            {...register("password")}
            placeholder="Write your Password"
          />
          <p>{errors.password?.message}</p>

          <input className="button__blue" type="submit" />
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
