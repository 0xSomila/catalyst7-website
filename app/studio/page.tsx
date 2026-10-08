import Link from "next/link"

export default function Studio() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / STUDIO
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          A studio built on precision and expression.
        </h1>
        <p className="text-[#999999] text-xl max-w-2xl">
          Catalyst 7 is a Pretoria-based creative-technology studio. We combine
          strategy, technology and production into one operating system for
          businesses that want to move.
        </p>
      </section>

      {/* Stats Strip */}
      <section className="bg-[#1A1A1A] py-12 px-6 border-y border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
              3
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest">
              Verticals
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
              3
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest">
              Co-Founders
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
              20+
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest">
              Projects Delivered
            </p>
          </div>
          <div>
            <p className="text-[#EDE5D0] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-1">
              2025
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest">
              Founded
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-6">
            Who We Are
          </p>
          <p className="text-[#999999] text-base leading-relaxed mb-4">
            Catalyst 7 was founded in Pretoria by three co-founders in their
            early twenties with a clear thesis: most businesses don&apos;t fail
            because of a bad idea. They fail because they lack the systems to
            execute.
          </p>
          <p className="text-[#999999] text-base leading-relaxed mb-4">
            We built C7 to solve that. Across technology, production and
            consulting, we configure the capability that moves ideas into
            outcomes.
          </p>
          <p className="text-[#999999] text-base leading-relaxed mb-4">
            We are not a traditional agency. We are an operating studio. We work
            with founders, growing SMEs and creative businesses who need more
            than a service provider.
          </p>
        </div>

        <div>
          <p className="text-[#999999] text-xs uppercase tracking-widest mb-6">
            What Drives Us
          </p>
          <div className="border-b border-[#333333] pb-6 mb-6">
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Precision
            </h3>
            <p className="text-[#999999] text-sm">
              We design before we build. Every system, every frame, every
              strategy is mapped before it is made.
            </p>
          </div>
          <div className="border-b border-[#333333] pb-6 mb-6">
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Expression
            </h3>
            <p className="text-[#999999] text-sm">
              We bring identity to everything we make. Work that performs and
              work that resonates are not mutually exclusive.
            </p>
          </div>
          <div className="border-b border-[#333333] pb-6 mb-6">
            <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Ownership
            </h3>
            <p className="text-[#999999] text-sm">
              We take responsibility for outcomes, not just outputs. If it does
              not work, we fix it.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-12">
          The Team
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#CC1414]">
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">
              Somila Sogaxa
            </h3>
            <p className="text-[#999999] text-sm mb-4">
              CEO, Chief of Engineering
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              Leads product, engineering and technology. Somila architects the
              systems that make C7&apos;s work run.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">
              Lethuthando Nhlapho
            </h3>
            <p className="text-[#999999] text-sm mb-4">
              Chief of Film and Design
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              Leads production, creative direction and visual identity. Lethu
              brings the expression to every C7 project.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#333333]">
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-1 font-[family-name:var(--font-space-grotesk)]">
              Thembalethu Ngutshana
            </h3>
            <p className="text-[#999999] text-sm mb-4">
              Strategic Growth and Systems Architect
            </p>
            <p className="text-[#999999] text-sm leading-relaxed">
              Leads strategy, business development and systems design.
              Thembalethu configures how C7 and its clients grow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Work with a studio that takes ownership.
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Tell us what you&apos;re building. We&apos;ll tell you how we can
          help.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#CC1414] font-semibold px-10 py-4 hover:bg-[#EDE5D0] transition-colors inline-block"
        >
          Start a Conversation
        </Link>
      </section>
    </>
  )
}
