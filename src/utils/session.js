"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const checkSession = () => {
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      return true;
    }else{
      return false;
    }
  });
}

export const checkSessionRoute = (rout) => {
  const router = useRouter()
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
       router.push(rout);
    }
  });
};

