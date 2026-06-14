"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

type PlayerProfile = {
  id: string;
  player_name: string;
  team: string;
  position: string;
  age: number | null;
  eliteprospects_url: string | null;
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [playerName, setPlayerName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [eliteProspectsUrl, setEliteProspectsUrl] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("player_profiles")
        .select("id, player_name, team, position, age, eliteprospects_url")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data) {
        setProfile(data);
        setPlayerName(data.player_name || "");
        setTeam(data.team || "");
        setPosition(data.position || "");
        setAge(data.age ? String(data.age) : "");
        setEliteProspectsUrl(data.eliteprospects_url || "");
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  async function handleSave() {
    setSaving(true);
    setMessage("");
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setErrorMessage("You must be signed in to update your profile.");
      setSaving(false);
      return;
    }

    if (!playerName || !team || !position || !age || !eliteProspectsUrl) {
      setErrorMessage("Please fill out all fields.");
      setSaving(false);
      return;
    }

    if (!eliteProspectsUrl.includes("eliteprospects.com")) {
      setErrorMessage("Please enter a valid EliteProspects profile link.");
      setSaving(false);
      return;
    }

    if (profile?.id) {
      const { error } = await supabase
        .from("player_profiles")
        .update({
          player_name: playerName,
          team,
          position,
          age: Number(age),
          eliteprospects_url: eliteProspectsUrl,
        })
        .eq("id", profile.id);

      if (error) {
        setErrorMessage(error.message);
        setSaving(false);
        return;
      }
    } else {
      const { error } = await supabase.from("player_profiles").insert({
        user_id: user.id,
        player_name: playerName,
        team,
        position,
        age: Number(age),
        eliteprospects_url: eliteProspectsUrl,
      });

      if (error) {
        setErrorMessage(error.message);
        setSaving(false);
        return;
      }
    }

    setMessage("Profile saved successfully.");
    setSaving(false);
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f7f9fc]">
        <AppNav />
        <section className="p-10">
          <p className="font-semibold text-slate-600">Loading profile...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-5xl px-10 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <p className="font-bold text-blue-600">PLAYER PROFILE</p>

          <h1 className="mt-3 text-5xl font-black text-blue-950">
            Edit Player Profile
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Update the verified player source connected to this account.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              placeholder="Player Name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              placeholder="Team"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900"
            />

            <input
              placeholder="EliteProspects Profile Link"
              value={eliteProspectsUrl}
              onChange={(e) => setEliteProspectsUrl(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-black outline-none focus:border-blue-900 md:col-span-2"
            />
          </div>

          {message && (
            <p className="mt-5 font-semibold text-green-600">{message}</p>
          )}

          {errorMessage && (
            <p className="mt-5 font-semibold text-red-600">{errorMessage}</p>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-8 w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Profile"}
          </button>

          <Link
            href="/dashboard"
            className="mt-4 block text-center font-semibold text-blue-950 underline"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}