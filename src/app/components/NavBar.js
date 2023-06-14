import Link from "next/link";
import React from "react";
import NavButton from "./NavButton";

export default function NavBar() {
  return (
      <div className="flex items-center justify-center">
        <nav className="flex items-center gap-x-4">
          <ul className="flex items-center gap-x-3 text-gray-500 font-medium text-sm">
            <li className="hover:text-gray-800">
              <Link className="py-3 px-2" href="/">
                Home
              </Link>
            </li>
            <li className="hover:text-gray-800">
              <Link className="py-3 px-2" href="/solutions">
                Solutions
              </Link>
            </li>
            <li className="hover:text-gray-800">
              <Link className="py-3 px-2" href="/docs">
                Docs
              </Link>
            </li>
            <li className="hover:text-gray-800">
              <Link className="py-3 px-2" href="/pricing">
                Pricing
              </Link>
            </li>
            <li className="hover:text-gray-800">
              <Link className="py-3 px-2" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <NavButton />
      </div>
  );
}
