"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    setMessage("");
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    setMessage("Password reset link sent. Check your inbox.");
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

          <p className="mt-8 font-bold text-blue-600">PASSWORD RECOVERY</p>

          <h1 className="mt-3 text-5xl font-black leading-tight text-blue-950">
            Forgot your password?
          </h1>

          <p className="mt-4 leading-7 text-slate-600">
            Enter the email connected to your IceIndex account and we’ll send
            you a secure password reset link.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800 disabled:opacity-60"
            >
              {loading ? "Sending Reset Link..." : "Send Reset Link"}
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