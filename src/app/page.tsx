"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  return (
    <div>
      <div className="grid grid-cols-4 h-screen">
        <div className="bg-yellow-300">1</div>
        <div className="bg-green-300 col-span-3">2</div>
      </div>
    </div>
  );
}
