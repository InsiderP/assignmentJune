"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Input } from "@nextui-org/react";
import Errmsg from "@/core/Errmsg";

import Link from "next/link";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import useSignIn from "@/libs/mutation/userSignIn";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm();
  const { mutate: createUser, isLoading: createUserLoading } = useSignIn();

  const onSubmit = async (formdata) => {
    createUser(formdata);
  };

  return (
    <div>
      <div className="flex justify-center mt-10 items-center w-full h-[500px]  p-1 ">
        <div className="flex flex-col  bg-white base:w-[350px] small:w-[400px] medium:w-[500px] h-full overflow-auto  CustomScrollbar scrollbar-none  px-6  border border-gray-400 rounded-lg">
          <div className="mt-8">
            <h1 className="base:text-md medium:text-xl font-bold CustomColor text-center ">
              Sign Up Your Account
            </h1>
          </div>

          <form
            className="flex flex-col gap-2 mt-12"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                control={control}
                rules={{ required: "Name is required" }}
                name="name"
                render={({ field: { onChange, value } }) => {
                  return (
                    <div>
                      <Input
                        size={"sm"}
                        variant={"bordered"}
                        color="blue"
                        onChange={onChange}
                        value={value}
                        label="Enter Full Name"
                      />
                      <Errmsg name="name" err={errors} />
                    </div>
                  );
                }}
              />
            </div>

            <div>
              <Controller
                control={control}
                rules={{ required: "Email is required" }}
                name="email"
                render={({ field: { onChange, value } }) => {
                  return (
                    <div>
                      <Input
                        size={"sm"}
                        color="blue"
                        type="email"
                        onChange={onChange}
                        value={value}
                        label="Enter Your Email"
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
                            <FaEyeSlash
                              onClick={() => setShowPassword(false)}
                            />
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

            <Button
              size="md"
              type="submit"
              className="bg-gradient-to-r from-lime-400 to-blue-500 text-white font-semibold rounded-lg
                px-4 py-3"
            >
              Sign Up
            </Button>
          </form>
          <hr className=" border-gray-300 w-full mt-3" />

          <p className="text-center mt-2 base:text-sm medium:text-[16px]">
            Already have an Account?{" "}
            <Link href="/login" className="CustomColor font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
