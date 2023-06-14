"use client";
import { useRouter } from "next/navigation";
import DashPage from "@/app/components/Dashboard/DashPage";

export default async function page() {
  return (
    <>
      <DashPage />
    </>
  );
}
