import AppNav from "../components/AppNav";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="px-10 py-14">
        <p className="font-bold text-blue-600">PRODUCT FEATURES</p>

        <h1 className="mt-3 text-6xl font-black text-blue-950">
          Built for player development.
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          IceIndex helps players and families turn scattered hockey stats into
          clear performance insights, development signals, and progress tracking.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            [
              "IceIndex Score",
              "A clean 0–10 score that summarizes a player’s development profile.",
            ],
            [
              "Confidence Meter",
              "Shows how reliable the score is based on data quality and sample size.",
            ],
            [
              "Player Dashboard",
              "Displays scoring, trends, strengths, weaknesses, and season summaries.",
            ],
            [
              "Development Tracking",
              "Tracks progress over time across seasons, teams, and leagues.",
            ],
            [
              "Context Adjustment",
              "Adjusts performance based on league strength, team quality, and age level.",
            ],
            [
              "Progress Reports",
              "Turns raw stats into simple explanations that parents and players understand.",
            ],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-blue-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}