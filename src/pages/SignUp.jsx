import React, { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Button from "../components/Botton";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    register ,
    formState: {errors},
    handleSubmit } = useForm(  {
      mode:"all",
    }
);
  const onSubmit = (formData) => {
    setIsLoading(true);
    fetch("https://hakathon2023.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data.accessToken);
        localStorage.setItem("Token", result.data.accessToken);
        localStorage.setItem('ID',JSON.stringify(result.data.data._id))
        setIsLoading(false);
        navigate("/SignIn");
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border-solid  w-1/4 m-auto mt-10">
        <Logo />
        <h1 className="text-xl font-bold">Sign Up</h1>
        <p className="text-lg font-semibold mb-5">
          Fill the following information to create an account
        </p>
        <div className="flex  flex-col mb-8">
          <div className="mb-4 ">
            <p className="text-base font-semibold mb-2"> Name </p>
            <input
              {...register("name", {
                required:"Name is required",
                minLength:{
                  value: 3,
                  message: "name must be atleast 3 characters long "
                },
              })}
              placeholder="Name"
              className="w-full rounded-sm border-gray-400 h-7"
            />
            <p className="text-red-700">{errors.name?.message}</p>
          </div>
          <div className="mb-7">
          <p className="text-base font-semibold mb-2"> Email </p>
          <input
            {...register("email", { 
              required:"Email is required",
              pattern:{
                value: emailValidation,
                message: "Email must be valid" ,
              }
            })}
            placeholder="Email"
            className="w-full rounded-sm border-gray-400 h-7"
          />
          <p className="text-red-700">{errors.email?.message}</p> 
        </div>
        </div>
        {isLoading ?  "isloading..." : <Button title={"Sign up"} type="submit" />}
        
        <p className="text-base font-semibold text-center mt-10">
          Already have an account?
          <Link className="text-[#2D65E4]" to="/SignIn">
            {" "}
            login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
