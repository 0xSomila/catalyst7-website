import Link from "next/link"

export default function Production() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / PRODUCTION &amp; MEDIA
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Production that moves people.
        </h1>
        <p className="text-[#999999] text-xl max-w-2xl mb-10">
          From commercial film to podcast production, we create content with
          intent. Every frame has a job to do.
        </p>
        <Link
          href="/contact"
          className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors inline-block"
        >
          Start a Production Brief
        </Link>
      </section>

      {/* What We Produce */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-12">
          Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#CC1414] text-sm font-medium mb-3">01</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Commercial Film
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Brand films, product spots and campaign content. Shot, directed
              and edited in-house.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">02</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Social Content
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Platform-native video and photography for Instagram, TikTok and
              LinkedIn. Built around your growth targets.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">03</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Podcast Production
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Full-service audio and video podcast setup, recording, editing and
              distribution strategy.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8">
            <p className="text-[#999999] text-sm font-medium mb-3">04</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Creative Direction
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Concept development, shot lists, styling and art direction for
              shoots and campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* How a Production Runs */}
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
                Brief
              </h3>
              <p className="text-[#999999] text-sm">
                You tell us the goal, the audience and the deadline.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                02
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Concept
              </h3>
              <p className="text-[#999999] text-sm">
                We develop the creative direction and production plan.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                03
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Shoot
              </h3>
              <p className="text-[#999999] text-sm">
                We execute on location or in studio with our production team.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[#CC1414] text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
                04
              </p>
              <h3 className="text-[#EDE5D0] font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Deliver
              </h3>
              <p className="text-[#999999] text-sm">
                Edited, graded and ready for your platform of choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-12">
          Selected Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1A1A1A] p-8 border-l-2 border-[#CC1414]">
            <p className="text-[#CC1414] text-xs uppercase tracking-widest mb-3">
              Commercial Film · 2025
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Lethiwe Dlamini — Brand Film
            </h3>
            <p className="text-[#999999] text-sm">
              Brand identity film for a personal brand launch.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-l-2 border-[#333333]">
            <p className="text-[#999999] text-xs uppercase tracking-widest mb-3">
              Production &amp; Media · 2025
            </p>
            <h3 className="text-[#EDE5D0] text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
              Circuits of Culture — Podcast Trailer
            </h3>
            <p className="text-[#999999] text-sm">
              Trailer production for a culture and conversation podcast.
            </p>
          </div>
        </div>
        <Link
          href="/work"
          className="text-[#EDE5D0] text-sm hover:text-[#CC1414] transition-colors mt-8 inline-block"
        >
          View All Work &rarr;
        </Link>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Got a production in mind?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Brief us. We&apos;ll bring it to life.
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
