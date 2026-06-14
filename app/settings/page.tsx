import AppNav from "../components/AppNav";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <AppNav />

      <section className="mx-auto max-w-3xl px-10 py-12">
        <div className="rounded-3xl bg-white p-10 shadow-2xl">
          <p className="font-bold text-blue-600">ACCOUNT SETTINGS</p>

          <h1 className="mt-3 text-5xl font-black text-blue-950">Settings</h1>

          <div className="mt-8 space-y-5">
            <div>
              <label className="font-bold text-blue-950">Email</label>
              <input
                defaultValue="caden@example.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4"
              />
            </div>

            <div>
              <label className="font-bold text-blue-950">Subscription Plan</label>
              <div className="mt-2 rounded-2xl bg-blue-50 p-4 font-bold text-blue-950">
                Player Plan — $9/month
              </div>
            </div>

            <button className="w-full rounded-2xl bg-blue-950 p-4 text-lg font-bold text-white">
              Save Changes
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}