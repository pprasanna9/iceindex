"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleResetPassword() {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset email sent. Check your inbox.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f9fc] p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="text-4xl font-black text-blue-950">
          Reset Password
        </h1>

        <p className="mt-3 text-slate-600">
          Enter your email and we'll send you a password reset link.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 w-full rounded-2xl border p-4 text-black"
        />

        <button
          onClick={handleResetPassword}
          className="mt-6 w-full cursor-pointer rounded-2xl bg-blue-950 p-4 font-bold text-white hover:bg-blue-800"
        >
          Send Reset Link
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