"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckSessionRoute } from "@/utils/session";

export default function Page() {
  CheckSessionRoute("/dashboard");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const responce = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const responceData = await responce.json();
      if (responce.status === 200) {
        setData({
          name: "",
          email: "",
          password: "",
        });
        setLoading(false);
  

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setLoading(false);
    
      }
    } catch (error) {
      setLoading(false);
console.log(error)
    }
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
       
        <form className="bg-white rounded-md shadow-md py-8 px-7 mt-5 w-1/3 my-8" onSubmit={handleOnSubmit}>
          <h2 className="text-xl text-gray-700 font-bold w-full mb-4 mt-1 text-left">Create Your Account</h2>
          <div className="flex flex-col justify-center w-full my-4">
            <label className="text-gray-700 text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input className="border-2 rounded-lg focus:border-black focus:invalid:border-red-600 outline-none py-2 px-3 text-base placeholder:text-sm text-black font-normal" type="text" name="name" id="name" placeholder="name" value={data.name} onChange={handleOnChange} required={true} minLength="3"/>
          </div>
          <div className="flex flex-col justify-center w-full my-4">
            <label className="text-gray-700 text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input className="border-2 rounded-lg focus:border-black focus:invalid:border-red-600 outline-none py-2 px-3 text-base placeholder:text-sm text-black font-normal" type="email" name="email" id="email" placeholder="example@email.com" value={data.email} onChange={handleOnChange} required={true} />
          </div>
          <div className="flex flex-col justify-center w-full my-4">
            <label className="text-gray-700 text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input className="border-2 rounded-lg focus:border-black focus:invalid:border-red-600 outline-none py-2 px-3 text-base placeholder:text-sm text-black font-normal" type="password" name="password" id="password" placeholder="••••••••" value={data.password} onChange={handleOnChange} required={true} minLength="6" />
          </div>

          <div className="flex justify-between items-center text-sm w-full mt-3 mb-2">
            <div className="flex items-center">
              <input type="checkbox" className="rounded" id="remember" required={true}/>
              <label htmlFor="remember" className="ml-2 text-gray-700">
                I accept the Terms and Conditions
              </label>
            </div>
          </div>

          <button className={`px-4 py-3 w-full my-3 text-white bg-gray-800 font-medium text-sm border border-gray-800 rounded-md duration-500 ${loading ? "bg-blue-500" : "hover:text-black hover:bg-white duration-500"}`} disabled={loading} type="submit">
            {loading ? "Please wait.." : "Sign Up"}
          </button>

          <div className="mt-3 text-gray-700 text-sm flex">
            <h2>Already have an account?</h2>
            <Link className="hover:underline font-medium text-gray-700" href="/login">
              <h2>&nbsp;Sign In</h2>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
