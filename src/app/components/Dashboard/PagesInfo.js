import Link from "next/link";
import React from "react";

export default function PagesInfo() {
  return (
    <>
      <div class="h-52 p-6 pb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <div>
          <Link href="/">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">Noteworthy technology..</h5>
          </Link>
          <p class="mb-4 text-sm font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology...</p>
        </div>
        <Link href="/pages/546">
          <button className="py-2 px-4 font-medium text-sm border border-gray-300 rounded-md hover:text-black hover:bg-gray-50 duration-500">Setting</button>
        </Link>
      </div>
    </>
  );
}
