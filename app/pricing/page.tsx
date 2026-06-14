"use client";

import { useEffect, useState } from "react";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

type Subscription = {
  plan_name: string;
  status: string;
  expires_at: string | null;
};

export default function PricingPage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  useEffect(() => {
    async function loadSubscription() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      setUserEmail(user.email ?? null);

      const { data } = await supabase
        .from("user_subscriptions")
        .select("plan_name, status, expires_at")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setSubscription(data);
      }
    }

    loadSubscription();
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="px-10 py-14">
        <p className="font-bold text-blue-600">PRICING</p>

        <h1 className="mt-3 text-6xl font-black text-blue-950">
          Simple pricing for players and families.
        </h1>

        {userEmail && (
          <div className="mt-10 rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <p className="text-blue-200">Your Current Plan</p>

            <h2 className="mt-3 text-5xl font-black">
              {subscription?.plan_name || "Free"}
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Status: {subscription?.status || "Active"}
            </p>

            <p className="mt-2 text-lg text-blue-100">
              Expiry Date:{" "}
              {subscription?.expires_at
                ? subscription.expires_at
                : "No expiry date"}
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Free", "$0", "Basic profile and limited dashboard preview."],
            ["Player", "$9/month", "Full IceIndex score, analytics, and progress tracking."],
            ["Family", "$19/month", "Multiple player profiles under one family account."],
          ].map(([plan, price, desc]) => (
            <div key={plan} className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-blue-950">{plan}</h2>
              <p className="mt-6 text-5xl font-black text-blue-950">{price}</p>
              <p className="mt-6 text-slate-600">{desc}</p>

              <button className="mt-8 w-full cursor-pointer rounded-2xl bg-blue-950 p-4 font-bold text-white">
                {userEmail ? "Change Plan" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}