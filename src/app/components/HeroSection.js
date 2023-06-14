import React from "react";
import HeroSectionBtn from "./HeroSectionBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function HeroSection() {
  const session = await getServerSession(authOptions);
  if (session) {
    console.log(session);
  }
  return (
    <>
      <section className="w-full flex justify-center items-center">
        <div className="min-h-[80vh] flex flex-col justify-center items-center w-4/6 text-center gap-y-3">
          <h2 className="text-6xl font-bold text-gray-800">WL - Landing Page Maker</h2>
          <p className="text-gray-600 px-5 mt-3">WebLandify: Simplify landing page creation. Build captivating pages without coding. Customize with ease. Perfect for product launches, marketing campaigns, and events.</p>
          <HeroSectionBtn />
        </div>
      </section>
    </>
  );
}
