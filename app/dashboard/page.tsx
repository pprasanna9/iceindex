"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

type PlayerProfile = {
  player_name: string;
  team: string;
  position: string;
  age: number;
  eliteprospects_url: string;
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("player_profiles")
        .select("player_name, team, position, age, eliteprospects_url")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setProfile(data);
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7f9fc]">
        <AppNav />
        <section className="p-10">
          <p className="text-lg font-semibold text-slate-600">
            Loading dashboard...
          </p>
        </section>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-[#f7f9fc]">
        <AppNav />

        <section className="p-10">
          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <p className="font-bold text-blue-600">PLAYER DASHBOARD</p>

            <h1 className="mt-3 text-5xl font-black text-blue-950">
              No Player Profile Found
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Add a player profile and connect an EliteProspects source to
              personalize your dashboard.
            </p>

            <Link
              href="/input"
              className="mt-8 inline-block rounded-2xl bg-blue-950 px-6 py-4 font-bold text-white"
            >
              Create Player Profile
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="p-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-blue-600">PLAYER DASHBOARD</p>

            <h1 className="mt-2 text-6xl font-black text-blue-950">
              {profile.player_name}
            </h1>

            <p className="mt-2 text-xl text-slate-500">
              {profile.team} • {profile.position} • Age {profile.age}
            </p>

            <a
              href={profile.eliteprospects_url}
              target="_blank"
              className="mt-4 inline-block font-semibold text-blue-700 underline"
            >
              View EliteProspects Source
            </a>
          </div>

          <div className="rounded-3xl bg-blue-950 px-10 py-6 text-white shadow-xl">
            <p className="text-sm text-blue-200">ICEINDEX SCORE</p>
            <h2 className="mt-2 text-6xl font-black">Pending</h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Production", "Pending", "Waiting for verified stats"],
            ["Context", "Pending", "Waiting for league context"],
            ["Trajectory", "Pending", "Waiting for season history"],
            ["Confidence", "Source Added", "EliteProspects link connected"],
          ].map(([label, value, desc]) => (
            <div key={label} className="rounded-3xl bg-white p-6 shadow-xl">
              <p className="text-slate-500">{label}</p>
              <h2 className="mt-3 text-3xl font-bold text-blue-950">
                {value}
              </h2>
              <p className="mt-3 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Verified Data Status
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This player profile is now connected to an EliteProspects source.
              The next backend step is to fetch verified stats from that profile,
              store them in Supabase, and calculate the IceIndex score automatically.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">
              Player Source Details
            </h2>

            <div className="mt-6 space-y-4">
              {[
                ["Player", profile.player_name],
                ["Team", profile.team],
                ["Position", profile.position],
                ["Age", String(profile.age)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl bg-blue-50 p-4"
                >
                  <span className="text-slate-500">{label}</span>
                  <span className="font-bold text-blue-950">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}