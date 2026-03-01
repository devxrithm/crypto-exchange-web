"use client";
import { useRouter } from "next/navigation";
import { api } from "@/src/lib/axios";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  useEffect(() => {
    const verifyToken = async () => {
      const res = await api.post("/api/auth/verify-token");
      console.log("at dashbaoard", res.data);
      if (res.data.statusCode === 400) {
        router.push("/in/auth/login");
      }
    };
    verifyToken();
  }, [router]);

  return <>{children}</>;
}
