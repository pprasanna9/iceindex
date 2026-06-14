import AppNav from "../components/AppNav";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="p-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-blue-600">PLAYER DASHBOARD</p>
            <h1 className="mt-2 text-6xl font-black text-blue-950">Caden Kim</h1>
            <p className="mt-2 text-xl text-slate-500">Chicago Steel U16 • Forward</p>
          </div>

          <div className="rounded-3xl bg-blue-950 px-10 py-6 text-white shadow-xl">
            <p className="text-sm text-blue-200">ICEINDEX SCORE</p>
            <h2 className="mt-2 text-6xl font-black">8.4</h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-4 gap-6">
          {[
            ["Production", "8.5", "Strong offensive output"],
            ["Context", "7.4", "Tier-adjusted performance"],
            ["Trajectory", "8.1", "Positive development curve"],
            ["Confidence", "94%", "High data reliability"],
          ].map(([label, value, desc]) => (
            <div key={label} className="rounded-3xl bg-white p-6 shadow-xl">
              <p className="text-slate-500">{label}</p>
              <h2 className="mt-3 text-5xl font-bold text-blue-950">{value}</h2>
              <p className="mt-3 text-sm text-slate-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Development Summary</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Caden shows strong production for his current level with a steady
              development curve. His profile suggests a high-upside forward with
              reliable offensive contribution and strong recent performance indicators.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Key Metrics</h2>

            <div className="mt-6 space-y-4">
              {[
                ["Points Per Game", "1.42"],
                ["Goals", "34"],
                ["Assists", "28"],
                ["League Percentile", "92%"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">
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