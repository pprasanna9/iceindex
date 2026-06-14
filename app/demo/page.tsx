import Link from "next/link";
import AppNav from "../components/AppNav";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="relative overflow-hidden px-10 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold text-blue-600">LIVE PRODUCT DEMO</p>

            <h1 className="mx-auto mt-4 max-w-5xl text-7xl font-black leading-tight text-blue-950">
              See how IceIndex turns raw hockey data into player intelligence.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
              This demo shows the future dashboard experience once verified stats
              are imported from trusted hockey data sources.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/register"
                className="rounded-2xl bg-blue-950 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-800"
              >
                Build Your Profile
              </Link>

              <Link
                href="/pricing"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-bold text-blue-950 shadow-sm hover:bg-slate-50"
              >
                View Pricing
              </Link>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-blue-950 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200">Sample Verified Player</p>
                  <h2 className="mt-2 text-5xl font-black">Caden Kim</h2>
                  <p className="mt-2 text-blue-100">
                    LA Jr. Kings 14U AAA • Forward • Verified Source Connected
                  </p>
                </div>

                <div className="rounded-3xl bg-white/10 px-8 py-6 text-center">
                  <p className="text-sm text-blue-200">ICEINDEX</p>
                  <h3 className="mt-2 text-6xl font-black">8.4</h3>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-4 gap-4">
                {[
                  ["Production", "8.5", "Strong offensive output"],
                  ["Context", "7.4", "Tier-adjusted performance"],
                  ["Trajectory", "8.1", "Positive growth curve"],
                  ["Confidence", "94%", "High data reliability"],
                ].map(([label, value, desc]) => (
                  <div key={label} className="rounded-2xl bg-white/10 p-5">
                    <p className="text-sm text-blue-200">{label}</p>
                    <p className="mt-2 text-4xl font-black">{value}</p>
                    <p className="mt-2 text-sm text-blue-100">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-6">
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">Verified Source</p>
                <h3 className="mt-3 text-2xl font-black text-blue-950">
                  EliteProspects Connected
                </h3>
                <p className="mt-3 text-slate-600">
                  Player stats are pulled from trusted external profiles instead
                  of self-reported input.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">Development Signal</p>
                <h3 className="mt-3 text-2xl font-black text-blue-950">
                  Trajectory Tracking
                </h3>
                <p className="mt-3 text-slate-600">
                  IceIndex identifies whether a player is accelerating, stable,
                  plateauing, or missing data.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">Transparency</p>
                <h3 className="mt-3 text-2xl font-black text-blue-950">
                  Confidence Meter
                </h3>
                <p className="mt-3 text-slate-600">
                  Every score includes a confidence rating so users know how much
                  data backs the evaluation.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-4 gap-6 text-center">
            {[
              ["55", "Games Tracked"],
              ["23", "Total Points"],
              ["0.42", "Points Per Game"],
              ["#23", "National Team Rank"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-5xl font-black text-blue-950">{value}</p>
                <p className="mt-2 font-semibold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}