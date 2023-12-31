"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const HeadNavBar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex gap-5 items-center justify-between">
        <div className="flex gap-7 items-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <h2>Home</h2>
          <h2>Bookmark</h2>
        </div>
        <div
          className=" bg-gray-100 p-[6px] rounded-md
      w-[40%] gap-3 hidden md:flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent 
        outline-none w-full"
          />
        </div>
        <div>
          {session?.user?.image ? (
            <>
              <Image
                onClick={() => signOut()}
                src={session?.user?.image}
                alt="user"
                width={30}
                height={30}
                className="rounded-full cursor-pointer 
              hover:border-[2px] border-blue-500"
              />
            </>
          ) : (
            <>
              <svg
                onClick={() => signIn()}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 rounded-full cursor-pointer
                hover:border-[2px] border-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
              </svg>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeadNavBar;
