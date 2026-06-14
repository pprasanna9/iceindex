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

  const [selectedPlan, setSelectedPlan] = useState("Free");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Basic profile and limited dashboard preview.",
    },
    {
      name: "Player",
      price: "$9/month",
      description: "Full IceIndex score, analytics, and progress tracking.",
    },
    {
      name: "Family",
      price: "$19/month",
      description: "Multiple player profiles under one family account.",
    },
  ];

  function getExpiryDate() {
    if (selectedPlan === "Free") {
      return null;
    }

    const date = new Date();
    date.setMonth(date.getMonth() + 1);

    return date.toISOString().split("T")[0];
  }

  async function handleRegister() {
    setErrorMessage("");
    setLoading(true);

    if (!fullName || !email || !password) {
      setErrorMessage("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      const { error: subscriptionError } = await supabase
        .from("user_subscriptions")
        .insert({
          user_id: data.user.id,
          plan_name: selectedPlan,
          status: "Active",
          expires_at: getExpiryDate(),
        });

      if (subscriptionError) {
        setErrorMessage(subscriptionError.message);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    router.push("/input");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-6xl px-10 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <p className="font-bold text-blue-600">CREATE ACCOUNT</p>

          <h1 className="mt-3 text-5xl font-black text-blue-950">
            Join IceIndex
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Create your account and choose a starting plan.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />
          </div>

          <h2 className="mt-10 text-3xl font-black text-blue-950">
            Choose Your Plan
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`cursor-pointer rounded-3xl border p-6 text-left shadow-lg transition ${
                  selectedPlan === plan.name
                    ? "border-blue-950 bg-blue-950 text-white"
                    : "border-slate-200 bg-white text-blue-950 hover:bg-blue-50"
                }`}
              >
                <h3 className="text-3xl font-black">{plan.name}</h3>

                <p className="mt-4 text-4xl font-black">{plan.price}</p>

                <p
                  className={`mt-4 leading-7 ${
                    selectedPlan === plan.name
                      ? "text-blue-100"
                      : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                {plan.name !== "Free" && (
                  <p
                    className={`mt-4 text-sm font-semibold ${
                      selectedPlan === plan.name
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    Expires one month from signup
                  </p>
                )}
              </button>
            ))}
          </div>

          {errorMessage && (
            <p className="mt-6 font-semibold text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="mt-8 w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : `Create Account — ${selectedPlan} Plan`}
          </button>
        </div>
      </section>
    </main>
  );
}