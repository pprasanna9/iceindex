"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="flex justify-center py-16">
        <div className="w-[450px] rounded-3xl bg-white p-10 shadow-2xl">
          <h1 className="text-5xl font-black text-blue-950">
            Create Account
          </h1>

          <p className="mt-3 text-slate-500">
            Start tracking your hockey development.
          </p>

          <div className="mt-8 space-y-4">
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 p-4 text-black"
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 p-4 text-black"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 p-4 text-black"
            />

			<button
			onClick={handleRegister}
			className="w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800"
			>
			Create Account
			</button>
          </div>
        </div>
      </section>
    </main>
  );
}