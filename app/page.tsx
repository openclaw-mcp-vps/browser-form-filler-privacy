export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Manifest V3 · Privacy First
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-fill forms with{" "}
          <span className="text-[#58a6ff]">privacy-focused</span> fake data
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FormShield is a browser extension that detects and fills any web form with realistic but fake data — perfect for developers, QA testers, and privacy advocates who refuse to hand over real info.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get FormShield — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">Cancel anytime. Works on Chrome &amp; Edge.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "🛡️", title: "Real-looking data", desc: "Names, emails, addresses generated per locale" },
          { icon: "⚡", title: "One-click fill", desc: "Detects all fields instantly, fills in milliseconds" },
          { icon: "🔄", title: "Synced profiles", desc: "Settings sync across all your devices via the cloud" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-[#8b949e] text-sm mb-6">Everything included, no tiers</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Unlimited form fills",
              "10+ locale data profiles",
              "Custom field rules",
              "Cross-device sync",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Is my real data ever sent anywhere?",
              a: "Never. FormShield generates all fake data locally in your browser. No personal information leaves your device."
            },
            {
              q: "Which browsers are supported?",
              a: "Chrome and Edge (Manifest V3). Firefox support is on the roadmap."
            },
            {
              q: "Can I customize what data gets generated?",
              a: "Yes. You can create named profiles with custom rules per field type, domain, or form selector."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-1">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} FormShield. All rights reserved.
      </footer>
    </main>
  );
}
