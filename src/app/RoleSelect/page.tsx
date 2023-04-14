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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Role Select</h1>
        <p className="text-2xl font-light">Select your role</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6">
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
    </main>
  );
}