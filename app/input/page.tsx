"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppNav from "../components/AppNav";
import { supabase } from "../lib/supabaseClient";

export default function InputPage() {
  const router = useRouter();

  const [playerName, setPlayerName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [eliteProspectsUrl, setEliteProspectsUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSaveProfile() {
    setErrorMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setErrorMessage("You must be signed in to save a player profile.");
      return;
    }

    if (!playerName || !team || !position || !age || !eliteProspectsUrl) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!eliteProspectsUrl.includes("eliteprospects.com")) {
      setErrorMessage("Please enter a valid EliteProspects profile link.");
      return;
    }

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
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-4xl px-10 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <p className="font-bold text-blue-600">PLAYER SOURCE SETUP</p>

          <h1 className="mt-3 text-5xl font-black text-blue-950">
            Connect Verified Player Data
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Enter the player’s basic information and EliteProspects profile link.
            IceIndex will use verified external data instead of self-reported stats.
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

          <div className="mt-6 rounded-2xl bg-blue-50 p-5 text-sm leading-6 text-blue-950">
            Example: https://www.eliteprospects.com/player/1076237/caden-kim
          </div>

          {errorMessage && (
            <p className="mt-5 font-semibold text-red-600">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleSaveProfile}
            className="mt-8 block w-full cursor-pointer rounded-2xl bg-blue-950 p-4 text-center text-lg font-bold text-white hover:bg-blue-800"
          >
            Save Verified Player Source
          </button>
        </div>
      </section>
    </main>
  );
}