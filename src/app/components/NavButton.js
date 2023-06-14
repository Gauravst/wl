"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavButton() {
  const [user, setUser] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [session?.status]);

  return (
    <>
      <div className="pl-3">
        <Link href={user ? "/dashboard" : "/login"}>
          <button className="w-24 py-3 px-2 font-medium text-sm border border-gray-300 rounded-md hover:text-black hover:bg-gray-50 duration-500">{user ? "Dashboard" : "Login"}</button>
        </Link>
      </div>
    </>
  );
}
