"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSectionBtn() {
  const [user, setUser] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      setUser(true);
    } else {
      setUser(false);
    }
  });

  return (
    <>
      <div className="flex gap-x-8 mt-6">
        <Link href={user ? "/dashboard" : "/signup"}>
          <button className="w-28 py-3 px-2 text-white bg-gray-800 font-medium text-sm border border-gray-800 rounded-md hover:text-black hover:bg-transparent hover:border-gray-600 duration-500">Get Started</button>
        </Link>
        <Link href="/docs">
          <button className="w-28 py-3 px-2 text-black font-medium text-sm border border-gray-300 rounded-md hover:text-black hover:bg-gray-200 duration-500">Learn More</button>
        </Link>
      </div>
    </>
  );
}
