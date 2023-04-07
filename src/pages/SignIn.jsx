import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const[error,setError]=useState("");
  const {
     register,
     handleSubmit,
     formState: { errors },
     } = useForm({
      mode :"all"
     });

  const onSubmit = (formData) => {
    setIsLoading(true);
    fetch("https://hakathon2023.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // localStorage.setItem("Token", result.data.accessToken);
        // localStorage.setItem('ID',JSON.stringify(result.data.data._id));
        if (response.statusCode >= 400){
          setIsLoading(false);
          setError(response.message)
        }
        else if(response.statusCode < 400){ 
          setIsLoading(false);
          { navigate('/',{state:{AccessToken:response.data.accessToken}})}
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-1/4 m-auto mt-10">
        <Logo />
        <h1 className="text-xl font-bold">Login</h1>
        <p className="text-lg font-semibold mb-5">
          Fill the following information to create an account
        </p>
        <div className="mb-7">
          <p className="text-base font-semibold mb-2"> Email </p>
          <input
            {...register("email", { 
              required:"Email is required",
              pattern:{
                value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email must be valid" ,
              }
            })}
            placeholder="Email"
            className="w-full rounded-sm border-gray-400 h-7"
          />
          <p className="text-red-700">{errors.email?.message}</p> 
        </div>
        <p className="text-red-700 mb-5">{error}</p>       

         <Button title={isloading ? "Login" : "Submitting..."} type="submit" /> 

        {/* {isLoading ?  "isloading..." : <Button title={"Login"} type="submit" /> }  */}
        <p className="text-base font-semibold text-center mt-10">
          Don't have an account?{" "}
          <Link className="text-[#2D65E4]" to="/SignUp">
            {" "}
            Sign up{" "}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignIn;
