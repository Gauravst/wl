import React from "react";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-4 border-b sticky top-0 bg-white bg-opacity-80 backdrop-blur-lg h-[15vh]">
        <Link href="/">
          <h1 className="text-lg font-bold text-gray-500 cursor-pointer hover:text-gray-800">WL</h1>
        </Link>
        <NavBar />
      </div>
    </>
  );
}
