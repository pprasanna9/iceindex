import AppNav from "../components/AppNav";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="relative overflow-hidden px-10 py-16">
        <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-200 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-bold text-blue-600">PRODUCT FEATURES</p>

            <h1 className="mx-auto mt-4 max-w-5xl text-7xl font-black leading-tight text-blue-950">
              Everything a player needs to understand their development.
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
              IceIndex combines verified hockey data, scoring logic, confidence
              ratings, and clean dashboards into one player intelligence platform.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "IceIndex Score",
                "A simple 0–10 score that summarizes a player’s development profile using verified data.",
                "01",
              ],
              [
                "Verified Source Linking",
                "Players connect an EliteProspects profile so stats come from trusted sources, not manual input.",
                "02",
              ],
              [
                "Confidence Meter",
                "Every score includes a confidence rating showing how reliable the data behind it is.",
                "03",
              ],
              [
                "Player Dashboard",
                "A clean dashboard turns raw hockey data into development insights, trends, and status cards.",
                "04",
              ],
              [
                "Trajectory Tracking",
                "IceIndex tracks whether a player is accelerating, stable, plateauing, or missing key data.",
                "05",
              ],
              [
                "Context Adjustment",
                "Performance is interpreted with league strength, team quality, age, and competitive environment.",
                "06",
              ],
            ].map(([title, text, number]) => (
              <div
                key={title}
                className="rounded-[2rem] bg-white p-8 shadow-2xl transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-950 text-lg font-black text-white">
                  {number}
                </div>

                <h2 className="mt-6 text-3xl font-black text-blue-950">
                  {title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-blue-950 p-10 text-white shadow-2xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <p className="font-bold text-blue-200">WHY IT MATTERS</p>

                <h2 className="mt-3 text-4xl font-black">
                  Built around trust, not self-reported stats.
                </h2>
              </div>

              <div className="lg:col-span-2">
                <p className="text-xl leading-9 text-blue-100">
                  Most youth athletes only see raw stats. IceIndex turns those
                  numbers into a clearer development story by connecting verified
                  data sources, separating score from confidence, and explaining
                  what the numbers actually mean.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 text-center md:grid-cols-4">
            {[
              ["0–10", "Index Score"],
              ["100%", "Confidence Scale"],
              ["Verified", "Data Sources"],
              ["Mobile", "Friendly Dashboard"],
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