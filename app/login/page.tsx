"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin() {
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage("Incorrect email or password.");
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="flex justify-center py-16">
        <div className="w-[420px] rounded-3xl bg-white p-10 shadow-2xl">
          <h1 className="text-5xl font-black text-blue-950">
            Welcome Back
          </h1>

          <p className="mt-3 text-slate-500">
            Sign into your hockey development dashboard.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="email"
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

            {errorMessage && (
              <p className="text-sm font-medium text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800"
            >
              Sign In
            </button>
          </div>
		  <div className="mt-2 text-right">
  <Link
    href="/forgot-password"
    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
  >
    Forgot Password?
  </Link>
</div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link href="/register" className="font-semibold text-blue-950">
              Create one
            </Link>
			
          </p>
        </div>
      </section>
    </main>
  );
}