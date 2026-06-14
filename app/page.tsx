import Link from "next/link";
import AppNav from "./components/AppNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <AppNav />

      <section className="relative overflow-hidden px-10 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-14">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-900">
              Built for verified youth hockey development
            </div>

            <h1 className="text-7xl font-black leading-tight tracking-tight text-blue-950">
              The future of player development starts with verified data.
            </h1>

            <p className="mt-6 text-xl leading-8 text-slate-600">
              IceIndex connects trusted hockey data sources, analyzes player
              development, and turns verified stats into a clear player
              intelligence profile.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/register"
                className="rounded-2xl bg-blue-950 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-800"
              >
                Create Account
              </Link>

              <Link
                href="/demo"
                className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-bold text-blue-950 shadow-sm hover:bg-slate-50"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="w-[460px] rounded-[2rem] bg-white p-6 shadow-2xl">
            <div className="rounded-[1.5rem] bg-blue-950 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-200">Sample Player Analysis</p>
                  <h2 className="mt-2 text-3xl font-black">Verified Profile</h2>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  Source Connected
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex h-52 w-52 items-center justify-center rounded-full border-[16px] border-blue-400">
                  <div className="text-center">
                    <div className="text-6xl font-black">8.4</div>
                    <div className="text-xs tracking-[0.3em] text-blue-200">
                      INDEX SCORE
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-full bg-white/10 px-4 py-3 text-center text-sm font-bold text-blue-100">
                Confidence Meter: 94%
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["Production", "8.5"],
                ["Context", "7.4"],
                ["Trajectory", "8.1"],
                ["Confidence", "94%"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-black text-blue-950">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-4">
          {[
            ["Verified", "Source-based stats"],
            ["0–10", "Development score"],
            ["100%", "Confidence scale"],
            ["Player-first", "Family dashboard"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-3xl bg-white p-6 text-center shadow-xl">
              <p className="text-4xl font-black text-blue-950">{value}</p>
              <p className="mt-2 font-semibold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}