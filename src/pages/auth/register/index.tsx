import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
  email: string
  password: number
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
}).required();

const Register = () => {
  const { signUp }:any = useAuth();
  // const history = useHistory();
  // const { error } = await signUp({ email, password });

    
   const { register, handleSubmit, formState:{ errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
           <div className="form">
    <div className="form__auth">
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Write your Email"/>
      <p>{errors.email?.message}</p>
        
      <input type="password" {...register("password")} placeholder="Write your Password"/>
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
