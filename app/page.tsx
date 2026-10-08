import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] px-6 text-center">
        <div>
          <p className="uppercase tracking-widest text-[#999999] text-xs mb-6 font-[family-name:var(--font-inter)]">
            Catalyst 7 — Pretoria
          </p>
          <h1 className="font-bold text-5xl md:text-7xl text-[#EDE5D0] leading-tight mb-8 font-[family-name:var(--font-space-grotesk)]">
            We build the systems<br />
            that move <span className="text-[#CC1414]">business</span>.
          </h1>
          <p className="text-[#999999] text-lg md:text-xl max-w-xl mx-auto mb-10">
            Technology. Production. Consultancy. One studio, three verticals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/work"
              className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors"
            >
              See Our Work
            </Link>
            <Link
              href="/contact"
              className="border border-[#333333] text-[#EDE5D0] px-8 py-3 hover:border-[#EDE5D0] transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Three Verticals */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-[#999999] text-xs mb-12">
          What We Do
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#CC1414]">
            <p className="text-[#CC1414] text-sm font-medium mb-4">01</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Technology &amp; Automation
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Custom automation, AI assistants, web platforms and data systems.
              Built to reduce friction and scale operations.
            </p>
            <Link
              href="/technology"
              className="text-[#CC1414] text-sm mt-6 block hover:underline"
            >
              Explore Technology &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <p className="text-[#999999] text-sm font-medium mb-4">02</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Production &amp; Media
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Commercial film, social content, podcast production and creative
              direction. From brief to final cut.
            </p>
            <Link
              href="/production"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Explore Production &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <p className="text-[#999999] text-sm font-medium mb-4">03</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Business Consultancy
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Strategy, systems design and market entry. We configure the
              structure behind your growth.
            </p>
            <Link
              href="/consulting"
              className="text-[#EDE5D0] text-sm mt-6 block hover:text-[#CC1414] transition-colors"
            >
              Explore Consulting &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-[#1A1A1A] py-12 px-6 border-y border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-12 text-center">
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              3+
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest mt-1">
              Verticals
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              R500K+
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest mt-1">
              In Work Delivered
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              20+
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest mt-1">
              Projects Completed
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
              AWS
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest mt-1">
              Solutions Partner
            </p>
          </div>
        </div>
      </section>

      {/* Process Strip */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="uppercase tracking-widest text-[#999999] text-xs mb-12">
          How We Work
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <p className="text-[#CC1414] text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              01
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Understand
            </h3>
            <p className="text-[#999999] text-sm mt-2">
              We audit your operation, map the gaps and define the outcome.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              02
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Configure
            </h3>
            <p className="text-[#999999] text-sm mt-2">
              We design the system: people, tools, and process in sequence.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              03
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Build
            </h3>
            <p className="text-[#999999] text-sm mt-2">
              We execute. Code shipped, content produced, strategy deployed.
            </p>
          </div>
          <div className="flex-1">
            <p className="text-[#CC1414] text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-3">
              04
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold font-[family-name:var(--font-space-grotesk)]">
              Run
            </h3>
            <p className="text-[#999999] text-sm mt-2">
              We monitor, iterate and keep the system performing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Ready to build something that works?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Tell us what you need. We&apos;ll configure the rest.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#CC1414] font-semibold px-10 py-4 hover:bg-[#EDE5D0] transition-colors inline-block"
        >
          Start a Project
        </Link>
      </section>
    </>
  )
}
