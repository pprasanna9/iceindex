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

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic profile setup and limited dashboard preview.",
      features: ["Profile creation", "Verified source link", "Basic dashboard"],
    },
    {
      name: "Player",
      price: "$9/month",
      description: "Full IceIndex score, verified analytics, and player tracking.",
      features: ["Full IceIndex score", "Analytics dashboard", "Progress tracking"],
    },
    {
      name: "Family",
      price: "$19/month",
      description: "Multiple player profiles under one family account.",
      features: ["Multiple players", "Family dashboard", "Season reports"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="relative overflow-hidden px-10 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold text-blue-600">PRICING</p>

            <h1 className="mx-auto mt-4 max-w-5xl text-7xl font-black leading-tight text-blue-950">
              Simple plans for players and families.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
              Start free, then upgrade when you are ready to unlock full
              IceIndex analytics and long-term player tracking.
            </p>
          </div>

          {userEmail && (
            <div className="mt-14 rounded-[2rem] bg-blue-950 p-10 text-white shadow-2xl">
              <p className="font-bold text-blue-200">YOUR CURRENT PLAN</p>

              <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div>
                  <h2 className="text-6xl font-black">
                    {subscription?.plan_name || "Free"}
                  </h2>

                  <p className="mt-4 text-xl text-blue-100">
                    Signed in as {userEmail}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-6">
                    <p className="text-sm text-blue-200">Status</p>
                    <p className="mt-2 text-3xl font-black">
                      {subscription?.status || "Active"}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-6">
                    <p className="text-sm text-blue-200">Expiry Date</p>
                    <p className="mt-2 text-3xl font-black">
                      {subscription?.expires_at || "No Expiry"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const isCurrentPlan =
                userEmail && subscription?.plan_name === plan.name;

              return (
                <div
                  key={plan.name}
                  className={`rounded-[2rem] p-8 shadow-2xl ${
                    isCurrentPlan
                      ? "bg-blue-950 text-white"
                      : "bg-white text-blue-950"
                  }`}
                >
                  <p
                    className={`font-bold ${
                      isCurrentPlan ? "text-blue-200" : "text-blue-600"
                    }`}
                  >
                    {isCurrentPlan ? "CURRENT PLAN" : "PLAN"}
                  </p>

                  <h2 className="mt-4 text-4xl font-black">
                    {plan.name}
                  </h2>

                  <p className="mt-6 text-6xl font-black">
                    {plan.price}
                  </p>

                  <p
                    className={`mt-6 leading-7 ${
                      isCurrentPlan ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className={`rounded-2xl p-4 font-semibold ${
                          isCurrentPlan
                            ? "bg-white/10 text-blue-100"
                            : "bg-blue-50 text-blue-950"
                        }`}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    className={`mt-8 w-full cursor-pointer rounded-2xl p-4 font-bold ${
                      isCurrentPlan
                        ? "bg-white text-blue-950"
                        : "bg-blue-950 text-white"
                    }`}
                  >
                    {isCurrentPlan
                      ? "Current Plan"
                      : userEmail
                      ? "Change Plan"
                      : "Choose Plan"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}