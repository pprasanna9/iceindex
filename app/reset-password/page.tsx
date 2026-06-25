"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function updatePassword() {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Password updated successfully!");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-black text-blue-950">
          New Password
        </h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-6 w-full rounded-2xl border p-4 text-black"
        />

        <button
          onClick={updatePassword}
          className="mt-6 w-full cursor-pointer rounded-2xl bg-blue-950 p-4 font-bold text-white hover:bg-blue-800"
        >
          Update Password
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-slate-600">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}