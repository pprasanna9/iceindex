import AppNav from "../components/AppNav";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="relative overflow-hidden px-10 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold text-blue-600">PLAYER ANALYTICS</p>
          </div>

          {/* Main Score Card */}
          <div className="mt-16 rounded-[2rem] bg-blue-950 p-10 text-white shadow-2xl">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <p className="text-blue-200">Current Status</p>

                <h2 className="mt-3 text-6xl font-black">
                  Waiting for Verified Data
                </h2>

                <p className="mt-4 max-w-2xl text-xl text-blue-100">
                  Connect an EliteProspects profile and import verified stats
                  to unlock your IceIndex score and advanced analytics.
                </p>
              </div>

              <div className="flex h-56 w-56 items-center justify-center rounded-full border-[16px] border-blue-400">
                <div className="text-center">
                  <p className="text-blue-200">ICEINDEX</p>
                  <h3 className="text-7xl font-black">--</h3>
                  <p className="mt-2 text-blue-200">Pending</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Production",
                "Pending",
                "Evaluates scoring, creation, and offensive contribution.",
              ],
              [
                "Context",
                "Pending",
                "Adjusts for league strength and competitive environment.",
              ],
              [
                "Trajectory",
                "Pending",
                "Measures development trends over time.",
              ],
              [
                "Confidence",
                "Pending",
                "Determines how reliable the evaluation is.",
              ],
            ].map(([title, value, text]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-white p-8 shadow-xl"
              >
                <p className="text-slate-500">{title}</p>

                <h2 className="mt-3 text-4xl font-black text-blue-950">
                  {value}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Future Analytics Preview */}
          <div className="mt-12 rounded-[2rem] bg-white p-10 shadow-2xl">
            <h2 className="text-4xl font-black text-blue-950">
              Future Analytics Preview
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              Once verified player data is connected, IceIndex will generate
              advanced visualizations and development insights automatically.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">
                  Development Curve
                </p>

                <div className="mt-6 h-48 rounded-2xl bg-white shadow-inner" />

                <p className="mt-4 text-slate-600">
                  Track player growth across seasons and identify acceleration
                  or stagnation.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">
                  League Benchmarking
                </p>

                <div className="mt-6 h-48 rounded-2xl bg-white shadow-inner" />

                <p className="mt-4 text-slate-600">
                  Compare player performance relative to peers in the same
                  competitive environment.
                </p>
              </div>

              <div className="rounded-3xl bg-blue-50 p-6">
                <p className="font-bold text-blue-600">
                  Confidence Analysis
                </p>

                <div className="mt-6 h-48 rounded-2xl bg-white shadow-inner" />

                <p className="mt-4 text-slate-600">
                  Understand how much data is backing each conclusion and score.
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="mt-12 grid grid-cols-1 gap-6 text-center md:grid-cols-4">
            {[
              ["4", "Core Components"],
              ["100%", "Verified Data"],
              ["24/7", "Live Updates"],
              ["0-10", "IceIndex Scale"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <p className="text-5xl font-black text-blue-950">
                  {value}
                </p>

                <p className="mt-2 font-semibold text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}