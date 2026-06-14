import AppNav from "../components/AppNav";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="px-10 py-14">
        <p className="font-bold text-blue-600">PRICING</p>

        <h1 className="mt-3 text-6xl font-black text-blue-950">
          Simple pricing for players and families.
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-600">
          Early pricing can stay simple while the product is being validated.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {[
            [
              "Free",
              "$0",
              "Basic profile and limited dashboard preview.",
              ["Player profile", "Sample score", "Basic dashboard"],
            ],
            [
              "Player",
              "$9/month",
              "Full IceIndex score, analytics, and progress tracking.",
              ["Full IceIndex score", "Analytics dashboard", "Progress tracking"],
            ],
            [
              "Family",
              "$19/month",
              "Multiple player profiles under one family account.",
              ["Multiple players", "Family dashboard", "Season reports"],
            ],
          ].map(([plan, price, desc, features]) => (
            <div key={plan as string} className="rounded-3xl bg-white p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-blue-950">{plan}</h2>
              <p className="mt-6 text-5xl font-black text-blue-950">{price}</p>
              <p className="mt-5 leading-7 text-slate-600">{desc}</p>

              <div className="mt-6 space-y-3">
                {(features as string[]).map((feature) => (
                  <div key={feature} className="rounded-xl bg-blue-50 p-3 text-sm font-semibold text-blue-950">
                    {feature}
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-blue-950 p-4 font-bold text-white">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}