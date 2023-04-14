"use client";

import { useRouter } from "next/navigation";

import { useContext } from "react";
import { RoleContext } from "./RoleContext";

export default function Home() {
  const router = useRouter();

  const { role, userId, setRole, isLoading } = useContext(RoleContext);

  if (isLoading) {
    return <></>;
  }

  if (!role || !userId) {
    router.push("/RoleSelect");
    return;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 min-w-">
          <button onClick={() => router.push("/Questions?project=1")} className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md p-8">
            Prancer
          </button>
          <button onClick={() => router.push("/Questions?project=2")} className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md p-8">
            Dancer
          </button>
          <button onClick={() => router.push("/Questions?project=3")} className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md p-8">
            Blitzen
          </button>
          <button onClick={() => router.push("/Questions?project=4")} className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md p-8">
            Comet
          </button>
          <button onClick={() => router.push("/Questions?project=5")} className="w-full py-3 mt-10 bg-blue-600 text-white text-center font-medium rounded-md p-8">
            Snarfle
          </button>
        </div>
      </div>
    </div>
  );
}
