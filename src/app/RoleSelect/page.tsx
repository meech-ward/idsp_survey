"use client";

import { useRouter } from "next/navigation";

import { useContext } from "react";
import { RoleContext, Role } from "@/app/RoleContext";

export default function RoleSelect() {
  const router = useRouter();
  const { role, setRole, isLoading } = useContext(RoleContext);

  if (isLoading) {
    return <></>;
  }

  const selectRole = (role: Role) => {
    setRole(role);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 min-w-">
        <button
          onClick={() => selectRole("Student")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Student
        </button>
        <button
          onClick={() => selectRole("Faculty")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Faculty
        </button>
        <button
          onClick={() => selectRole("Sponsor")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sponsor
        </button>
        <button
          onClick={() => selectRole("Other")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Other
        </button>
        </div>
      </div>
    </div>
  );
}