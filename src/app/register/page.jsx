"use client";
import React from 'react';
import {useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Logo from "../../../public/assets/icons/logo.svg";
import ImgSignUp from "../../../public/assets/icons/sign-up.svg";
import Link from "next/link";

const Page = () => {
    const { handleSubmit, register } = useForm(); // Initialize useForm hook

    // Function to handle form submission
    const handleUserRegister = (data) => {
        console.log(data); // Log form data object to the console
        // You can perform any further actions here, such as submitting the data to an API
    };
    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="md:w-1/2 px-28">
                    <div className="pb-10">
                        <Image
                            width={175}
                            height={110}
                            src={Logo}
                            alt="logo"
                        />
                    </div>
                    <form className="max-w-full mx-auto"
                          onSubmit={handleSubmit(handleUserRegister)} // Pass handleUserRegister to handleSubmit
                    >
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
                                    Name</label>
                                <input
                                    className="p-2 w-full rounded-[8px] border"
                                    type="text"
                                    {...register("firstName", {required: "First Name is required"})}
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                                    Name</label>
                                <input
                                    className="p-2 w-full rounded-[8px] border"
                                    type="text"
                                    {...register("lastName", {required: "Last Name is required"})}
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6 ">
                            <div className="relative z-0 w-full group">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                    :</label>
                                <input
                                    className="p-2 w-full rounded-[8px] border"
                                    type="email"
                                    {...register("email", {required: "Email is required"})}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender
                                    :</label>
                                <select
                                    id="gender"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    {...register("gender", {required: "Gender is required"})} // Register the select element
                                >
                                    <option value="" disabled selected>
                                        Choose your gender
                                    </option>
                                    <option value="F">Female</option>
                                    <option value="M">Male</option>
                                </select>

                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password
                                </label>
                                <input
                                    className="p-2 w-full rounded-[8px] border"
                                    type="password"
                                    {...register("password", {required: "Password is required"})}
                                    placeholder="•••••••••••"
                                />
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                                    Password</label>
                                <input
                                    className="p-2 w-full rounded-[8px] border"
                                    type="password"
                                    {...register("confirmPassword", {required: "Confirm Password is required"})}
                                    placeholder="•••••••••••"
                                />
                            </div>
                        </div>
                        <p className="text-[#D3D3D3]">Have you already an account?
                            <Link href={"/login"} className="text-blue-500" lassName="text-blue-500"> Login</Link>
                        </p>
                        <button type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 mt-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex items-center">
                    <Image className="rounded-2xl"
                           width={400}
                           height={500}
                           src={ImgSignUp}
                           alt="login form image"/>
                </div>
            </div>

        </>
    );
};

export default Page;