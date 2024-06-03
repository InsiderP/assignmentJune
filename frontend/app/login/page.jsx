"use client";
import Errmsg from "@/core/Errmsg";
import useLogin from "@/libs/mutation/userLogin";


import { Button, Input } from "@nextui-org/react";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const { mutate: LoginFunc, isLoading: loginLoading } = useLogin();

  const onSubmit = (formdata) => {
    LoginFunc(formdata);
  };

  return (
    <div className="flex justify-center items-center w-full h-full p-5 ">
      <div className="flex flex-col gap-3 mt-5 bg-white base:w-[350px] small:w-[400px] medium:w-[500px] h-full overflow-auto  CustomScrollbar scrollbar-none py-5  px-16  border border-gray-400 rounded-lg">
        <div>
          <h1 className="base:text-md medium:text-xl font-bold CustomColor text-center ">
            Log in to your account
          </h1>
        </div>
        <form
          className="flex flex-col gap-4 mt-2"
            onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Controller
              control={control}
              rules={{
                required: "Email is Required",
              }}
              name="email"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input
                      onChange={onChange}
                      value={value}
                      maxLength={10}
                      label="Enter email"
                      color="blue"
                    />
                    <Errmsg name="email" err={errors} />
                  </div>
                );
              }}
            />
          </div>

          <div>
            <Controller
              control={control}
              rules={{ required: "Password is required" }}
              name="password"
              render={({ field: { onChange, value } }) => {
                return (
                  <div>
                    <Input
                      size={"sm"}
                      color="blue"
                      type={showPassword ? "text" : "password"}
                      label="Enter Password"
                      onChange={onChange}
                      value={value}
                      icon={
                        showPassword ? (
                          <FaEyeSlash onClick={() => setShowPassword(false)} />
                        ) : (
                          <FaEye onClick={() => setShowPassword(true)} />
                        )
                      }
                    />
                    <Errmsg name="password" err={errors} />
                  </div>
                );
              }}
            />
          </div>

          <div className="text-right mt-1">
            <a
              href="#"
              className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
            >
              Forgot Password
            </a>
          </div>
          <Button
            size="md"
            type="submit"
            className="w-full bg-gradient-to-r from-lime-400 to-blue-500 text-white font-semibold rounded-lg
            px-4 py-3 mt-1"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
