import AppNav from "../components/AppNav";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="px-10 py-14">
        <p className="font-bold text-blue-600">ANALYTICS ENGINE</p>

        <h1 className="mt-3 text-6xl font-black text-blue-950">
          Turn hockey stats into useful insight.
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          The analytics layer breaks performance into production, context,
          trajectory, and confidence so players know what their numbers actually mean.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Score Breakdown</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Each player receives separate pillar scores so they can understand
              whether their profile is driven by production, league context,
              growth trajectory, or data confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Development Trends</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Track points per game, season-over-season changes, role development,
              and performance direction across multiple seasons.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <p className="text-blue-200">Sample IceIndex</p>
            <h2 className="mt-4 text-7xl font-black">8.4</h2>
            <p className="mt-4 text-blue-100">High Confidence 94%</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Insight Summary</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Instead of only showing numbers, IceIndex explains what changed,
              what is improving, and where a player may need more development.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}