import Link from "next/link";
import AppNav from "./components/AppNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto flex max-w-7xl items-center justify-between gap-12 px-10 py-20">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
            Built for youth hockey development
          </div>

          <h1 className="text-7xl font-black leading-tight tracking-tight text-blue-950">
            The future of player development starts with data.
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            IceIndex turns hockey stats into clear player insights, development
            scores, confidence ratings, and progress tracking.
          </p>

          <div className="mt-10 flex gap-4">
            <Link href="/login" className="rounded-2xl bg-blue-950 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-800">
              Get Started
            </Link>

            <Link href="/demo" className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
              View Demo
            </Link>
          </div>
        </div>

        <div className="w-[430px] rounded-[2rem] bg-white p-6 shadow-2xl">
          <div className="rounded-[1.5rem] bg-blue-950 p-6 text-white">
            <p className="text-sm text-blue-200">Player Analysis</p>

            <div className="mt-8 flex items-center justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-[14px] border-blue-400">
                <div className="text-center">
                  <div className="text-6xl font-black">8.4</div>
                  <div className="text-xs tracking-[0.3em] text-blue-200">
                    INDEX SCORE
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-full bg-green-100 px-4 py-2 text-center text-sm font-bold text-green-700">
              High Confidence 94%
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
                <p className="mt-2 text-3xl font-bold text-blue-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}