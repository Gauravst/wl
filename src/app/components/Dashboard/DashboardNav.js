"use client";
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <nav className="flex flex-col min-h-full items-center justify-between w-full py-4 px-6">
          <ul className="flex-col min-w-full flex list-none text-gray-500 self-start">
            <li className="items-center hover:text-gray-800">
              <Link className="text-sm py-3 font-medium block " href="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="items-center hover:text-gray-800">
              <Link className="text-sm py-3 font-medium block " href="/pages">
                Pages
              </Link>
            </li>

            <li className="items-center hover:text-gray-800">
              <Link className="text-sm py-3 font-medium block " href="/forms">
                Forms
              </Link>
            </li>
          </ul>

          <ul className="flex-col min-w-full flex list-none text-gray-500 self-end">
            <hr className="my-2 min-w-full mt-auto" />
            <li className="items-center hover:text-gray-800">
              <Link className="text-sm py-3 font-medium block " href="/profile">
                Profile
              </Link>
            </li>
            <li className="items-center hover:text-gray-800">
              <Link className="text-sm py-3 font-medium block " href="/settings">
                Settings
              </Link>
            </li>
            <li className="items-center hover:text-gray-800 text-sm py-3 font-medium block">Logout</li>
          </ul>
      </nav>
    </>
  );
}
