"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { checkSessionRoute } from "@/utils/session";

export default function LoginForm() {
  checkSessionRoute("/dashboard");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
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

  const handleOnChecked = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const handleOnSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Logged in successfully!");
        router.push("/dashboard");
      }
    });
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <form className="bg-white rounded-md shadow-md py-8 px-7 mt-5 w-1/3 my-8" onSubmit={handleOnSubmit}>
          <h2 className="text-xl text-gray-700 font-bold w-full mb-4 mt-1 text-left">Login Your Account</h2>
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
              <input type="checkbox" className="rounded" id="remember" onChange={handleOnChecked} />
              <label htmlFor="remember" className="ml-2 text-gray-700">
                Remember me
              </label>
            </div>
            <div className="font-medium hover:underline text-gray-700">
              <Link href="/forgot-password">Forgot password?</Link>
            </div>
          </div>

          <button className={`px-4 py-3 w-full my-3 text-white bg-gray-800 font-medium text-sm border border-gray-800 rounded-md duration-500 ${loading ? "bg-blue-500" : "hover:text-black hover:bg-transparent hover:border-black"}`} disabled={loading} type="submit">
            {loading ? "Please wait.." : "Sign In"}
          </button>

          <div className="mt-3 text-gray-700 text-sm flex">
            <h2>Don’t have an account yet? </h2>
            <Link className="hover:underline font-medium text-gray-700" href="/signup">
              <h2>&nbsp;Sign up</h2>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
