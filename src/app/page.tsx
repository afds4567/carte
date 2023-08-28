"use client";
import CategoryList from "@/components/Home/CategoryList";
import GoogleMap from "@/components/Home/GoogleMap";
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
    <div className="grid gird-cols-1 md:grid-cols-4 overflow-100 ">
      <div className="bg-black p-3 w-screen md:w-auto md:bg-yellow-100 ">
        <CategoryList />
      </div>
      <div className="bg-gray-300 col-span-3">
        <GoogleMap />
      </div>
    </div>
  );
}
