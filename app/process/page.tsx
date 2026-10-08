import Link from "next/link"

export default function Process() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / PROCESS
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          How we work.
        </h1>
        <p className="text-[#999999] text-xl max-w-2xl">
          Every C7 engagement follows the same sequence. Not because it is
          bureaucratic, but because it is how you get to an outcome without
          burning time and money on the way.
        </p>
      </section>

      {/* The Four Steps */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-16">
          The Process
        </p>

        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 pb-16 border-b border-[#333333]">
          <div className="md:col-span-2">
            <p className="text-[#CC1414] text-6xl font-bold leading-none font-[family-name:var(--font-space-grotesk)]">
              01
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[#EDE5D0] text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Understand
            </h3>
            <p className="text-[#999999] text-sm">
              The brief, the business, the constraints.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="text-[#999999] text-base leading-relaxed">
              Before we recommend anything, we listen. We audit what exists, map
              what is missing and define what success looks like in measurable
              terms. No assumptions. No pre-packaged solutions.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 pb-16 border-b border-[#333333]">
          <div className="md:col-span-2">
            <p className="text-[#CC1414] text-6xl font-bold leading-none font-[family-name:var(--font-space-grotesk)]">
              02
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[#EDE5D0] text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Configure
            </h3>
            <p className="text-[#999999] text-sm">
              The strategy, the structure, the sequence.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="text-[#999999] text-base leading-relaxed">
              We design the system before we build it. Whether that is a
              technology architecture, a production plan or a business strategy,
              we map every component and its relationship before a single output
              is created.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 pb-16 border-b border-[#333333]">
          <div className="md:col-span-2">
            <p className="text-[#CC1414] text-6xl font-bold leading-none font-[family-name:var(--font-space-grotesk)]">
              03
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[#EDE5D0] text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Build
            </h3>
            <p className="text-[#999999] text-sm">
              Execution with weekly visibility.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="text-[#999999] text-base leading-relaxed">
              We ship in iterations, not in silence. Code is deployed, content
              is produced, strategies are activated, with regular checkpoints so
              you can see progress and course-correct early if needed.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-2">
            <p className="text-[#CC1414] text-6xl font-bold leading-none font-[family-name:var(--font-space-grotesk)]">
              04
            </p>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[#EDE5D0] text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Run
            </h3>
            <p className="text-[#999999] text-sm">
              Systems that hold their shape.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="text-[#999999] text-base leading-relaxed">
              We monitor, maintain and improve what we build. Technology
              degrades without maintenance. Strategy drifts without measurement.
              We stay engaged so the outcomes do not erode after delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Strip */}
      <section className="bg-[#1A1A1A] py-24 px-6 border-y border-[#333333]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
            What Does Not Change
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-[#CC1414] pl-6">
              <h3 className="text-[#EDE5D0] font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                No black-box delivery
              </h3>
              <p className="text-[#999999] text-sm">
                You see the work as it develops. No surprises at handover.
              </p>
            </div>
            <div className="border-l-2 border-[#333333] pl-6">
              <h3 className="text-[#EDE5D0] font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                Scope before speed
              </h3>
              <p className="text-[#999999] text-sm">
                We take the time to understand before we move fast. Rushing the
                brief costs more than slowing down at the start.
              </p>
            </div>
            <div className="border-l-2 border-[#333333] pl-6">
              <h3 className="text-[#EDE5D0] font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                Outcomes over outputs
              </h3>
              <p className="text-[#999999] text-sm">
                A delivered file is not a result. We measure success by what
                changes in your business, not what lands in your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
          What to Expect
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#1A1A1A] p-6">
            <p className="text-[#CC1414] text-sm font-medium mb-2">Day 1</p>
            <p className="text-[#EDE5D0] text-sm">
              Discovery call booked and brief received.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6">
            <p className="text-[#999999] text-sm font-medium mb-2">Day 2-3</p>
            <p className="text-[#EDE5D0] text-sm">
              Proposal or scope document delivered.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6">
            <p className="text-[#999999] text-sm font-medium mb-2">Day 5-7</p>
            <p className="text-[#EDE5D0] text-sm">
              Engagement confirmed and kicked off.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-6">
            <p className="text-[#999999] text-sm font-medium mb-2">Ongoing</p>
            <p className="text-[#EDE5D0] text-sm">
              Weekly updates until delivery and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Ready to start?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Send us a brief and we will respond within 24 hours.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#CC1414] font-semibold px-10 py-4 hover:bg-[#EDE5D0] transition-colors inline-block"
        >
          Send a Brief
        </Link>
      </section>
    </>
  )
}
