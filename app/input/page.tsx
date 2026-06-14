import Link from "next/link";
import AppNav from "../components/AppNav";

export default function InputPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-5xl px-10 py-12">
        <div className="rounded-[2rem] bg-white p-10 shadow-2xl">
          <p className="font-bold text-blue-600">PLAYER DATA ENTRY</p>

          <h1 className="mt-3 text-5xl font-black text-blue-950">
            Enter Player Stats
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Add basic player and season information to generate an IceIndex dashboard.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {[
              "Player Name",
              "Team",
              "Age",
              "Position",
              "League",
              "Games Played",
              "Goals",
              "Assists",
              "Height",
              "Weight",
            ].map((label) => (
              <input
                key={label}
                placeholder={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none focus:border-blue-900"
              />
            ))}
          </div>

          <Link
            href="/dashboard"
            className="mt-8 block rounded-2xl bg-blue-950 p-4 text-center text-lg font-bold text-white hover:bg-blue-800"
          >
            Generate IceIndex Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}