import Link from "next/link"

export default function Consulting() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / BUSINESS CONSULTANCY
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Strategy that earns its keep.
        </h1>
        <p className="text-[#999999] text-xl max-w-2xl mb-10">
          We don&apos;t sell strategy decks. We configure the systems,
          structures and sequences that move your business forward.
        </p>
        <Link
          href="/contact"
          className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors inline-block"
        >
          Book a Strategy Session
        </Link>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-12">
          Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#CC1414] text-sm font-medium mb-3">01</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Market Entry
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Research, positioning and go-to-market planning for new products,
              services or territories.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">02</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Systems Design
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              We map your operations and design the workflows, tools and
              processes that remove friction at scale.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">03</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Growth Strategy
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Revenue architecture, pipeline design and commercial model review
              for businesses ready to grow with discipline.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">04</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Operational Audit
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              We assess how your business actually runs, identify the gaps, and
              deliver a prioritised action plan.
            </p>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-[#1A1A1A] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
            The Process
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                01
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Audit
              </h3>
              <p className="text-[#999999] text-sm">
                We understand the business: revenue, operations, team,
                constraints.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                02
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Configure
              </h3>
              <p className="text-[#999999] text-sm">
                We design the strategy, structure and sequence of moves.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                03
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Execute
              </h3>
              <p className="text-[#999999] text-sm">
                We either implement alongside you or hand off a clear action
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
          Who We Work With
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-t-2 border-[#CC1414] pt-6">
            <h3 className="text-[#EDE5D0] text-lg font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Founders
            </h3>
            <p className="text-[#999999] text-sm">
              Early-stage businesses that need structure before they scale. We
              help you build it right.
            </p>
          </div>

          <div className="border-t-2 border-[#333333] pt-6">
            <h3 className="text-[#EDE5D0] text-lg font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Growing SMEs
            </h3>
            <p className="text-[#999999] text-sm">
              Businesses hitting a ceiling. We diagnose the constraint and
              redesign the operation.
            </p>
          </div>

          <div className="border-t-2 border-[#333333] pt-6">
            <h3 className="text-[#EDE5D0] text-lg font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Creative Businesses
            </h3>
            <p className="text-[#999999] text-sm">
              Agencies, studios and creative practices that need commercial
              rigour without losing what makes them work.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Know what needs to change. Not sure how?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Start with an audit. Everything else follows.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#CC1414] font-semibold px-10 py-4 hover:bg-[#EDE5D0] transition-colors inline-block"
        >
          Book a Session
        </Link>
      </section>
    </>
  )
}
