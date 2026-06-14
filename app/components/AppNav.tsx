"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AppNav() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setUserEmail(data.user.email ?? null);
      }
    }

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserEmail(session?.user?.email ?? null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUserEmail(null);
    router.push("/");
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white/90 px-10 py-5 shadow-sm backdrop-blur">
      <Link href="/" className="text-3xl font-black text-blue-950">
        IceIndex
      </Link>

      <div className="flex gap-3 text-sm font-semibold">
        <Link href="/" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Home
        </Link>

        <Link href="/dashboard" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Dashboard
        </Link>

        <Link href="/input" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Input Stats
        </Link>

        <Link href="/profile" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Profile
        </Link>

        <Link href="/features" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Features
        </Link>

        <Link href="/analytics" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Analytics
        </Link>

        <Link href="/pricing" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Pricing
        </Link>

        <Link href="/demo" className="rounded-xl px-3 py-2 text-slate-600 hover:bg-blue-50">
          Demo
        </Link>
      </div>

      {userEmail ? (
        <div className="flex items-center gap-3">
          <span className="max-w-[180px] truncate text-sm font-semibold text-slate-600">
            {userEmail}
          </span>

          <button
            onClick={handleSignOut}
            className="rounded-full bg-red-50 px-5 py-2 font-semibold text-red-600 hover:bg-red-100"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Link href="/login" className="rounded-full bg-blue-950 px-5 py-2 text-white">
          Sign In
        </Link>
      )}
    </nav>
  );
}