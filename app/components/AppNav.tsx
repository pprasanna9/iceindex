"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";

export default function AppNav() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUserEmail(data.user?.email ?? null);
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
    <nav className="sticky top-0 z-50 flex flex-col gap-4 bg-[#f7f9fc] px-5 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between md:px-10"><Link href="/" className="text-3xl font-black text-blue-950">
        IceIndex
      </Link>

      {userEmail ? (
        <>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link href="/dashboard" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Dashboard
            </Link>

            <Link href="/profile" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Profile
            </Link>

            <Link href="/analytics" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Analytics
            </Link>

			<Link href="/pricing" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
			  Pricing
			</Link>
            <Link href="/features" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Features
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="max-w-[180px] truncate text-sm font-semibold text-slate-600">
              {userEmail}
            </span>

            <button
              onClick={handleSignOut}
              className="cursor-pointer rounded-full bg-red-50 px-5 py-2 font-semibold text-red-600 hover:bg-red-100"
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link href="/" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Home
            </Link>

            <Link href="/features" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Features
            </Link>

            <Link href="/pricing" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Pricing
            </Link>

            <Link href="/demo" className="rounded-xl px-3 py-2 text-slate-700 hover:bg-blue-50">
              Demo
            </Link>
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="rounded-full border border-blue-950 px-5 py-2 font-semibold text-blue-950"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-blue-950 px-5 py-2 font-semibold text-white"
            >
              Create Account
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}