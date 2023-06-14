import PagesInfo from "@/app/components/Dashboard/PagesInfo";
import Link from "next/link";
import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

export default function Page() {
  return (
    <>
    <div>
      <div className="mb-6 flex justify-between items-center" key="pages">
        <h2 className="text-2xl my-3 text-gray-700 font-bold">Web Pages</h2>
        <Link href="/">
          <i className="text-3xl mx-3">
            <AiOutlinePlusCircle />
          </i>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-3">
        <PagesInfo />
        <PagesInfo />
        <PagesInfo />
        <PagesInfo />
        <PagesInfo />
      </div>
      </div>
    </>
  );
}
