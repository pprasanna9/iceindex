import Link from "next/link";
import AppNav from "../components/AppNav";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-6xl px-10 py-16 text-center">
        <p className="font-bold text-blue-600">PRODUCT DEMO</p>

        <h1 className="mt-3 text-6xl font-black text-blue-950">
          See IceIndex in action
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          This demo shows how a player’s raw stats become a development score,
          confidence rating, and dashboard.
        </p>

        <div className="mt-12 rounded-[2rem] bg-white p-8 shadow-2xl">
          <div className="rounded-[1.5rem] bg-blue-950 p-10 text-white">
            <p className="text-blue-200">Sample Player</p>
            <h2 className="mt-3 text-5xl font-black">Caden Kim</h2>

            <div className="mt-10 grid grid-cols-4 gap-4">
              {[
                ["IceIndex", "8.4"],
                ["Production", "8.5"],
                ["Trajectory", "8.1"],
                ["Confidence", "94%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-blue-200">{label}</p>
                  <p className="mt-2 text-4xl font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-2xl bg-blue-950 px-8 py-4 text-lg font-bold text-white"
        >
          Build Your Profile
        </Link>
      </section>
    </main>
  );
}