"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword() {
    setMessage("");
    setErrorMessage("");

    if (!password || !confirmPassword) {
      setErrorMessage("Please fill out both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setMessage("Password updated successfully. Redirecting to login...");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] bottom-20 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative w-full max-w-md rounded-[2rem] bg-white p-10 shadow-2xl">
          <Link href="/" className="text-3xl font-black text-blue-950">
            IceIndex
          </Link>

          <p className="mt-8 font-bold text-blue-600">ACCOUNT SECURITY</p>

          <h1 className="mt-3 text-5xl font-black leading-tight text-blue-950">
            Create a new password
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Enter a new password for your IceIndex account. Make sure it is
            secure and easy for you to remember.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            {errorMessage && (
              <p className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                {errorMessage}
              </p>
            )}

            {message && (
              <p className="rounded-2xl bg-green-50 p-4 text-sm font-semibold text-green-700">
                {message}
              </p>
            )}

            <button
              onClick={updatePassword}
              disabled={loading}
              className="w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800 disabled:opacity-60"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </div>

          <Link
            href="/login"
            className="mt-6 block text-center font-semibold text-blue-950 underline"
          >
            Back to Sign In
          </Link>
        </div>
      </section>
    </main>
  );
}