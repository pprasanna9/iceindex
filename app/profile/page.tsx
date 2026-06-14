import AppNav from "../components/AppNav";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="p-10">
        <div className="grid grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-950 text-4xl font-black text-white">
              CK
            </div>

            <h1 className="mt-6 text-4xl font-black text-blue-950">Caden Kim</h1>
            <p className="mt-2 text-slate-500">Forward • U16 • Chicago Steel</p>

            <div className="mt-6 rounded-2xl bg-green-100 p-4 text-center font-bold text-green-700">
              Profile 86% Complete
            </div>
          </div>

          <div className="col-span-2 rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-blue-950">Player Information</h2>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ["Age", "17"],
                ["Position", "Forward"],
                ["Team", "Chicago Steel U16"],
                ["League", "Tier 1"],
                ["Height", "5'10"],
                ["Weight", "155 lbs"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-blue-50 p-4">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-1 text-xl font-bold text-blue-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}