import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Catalyst 7 — Technology. Production. Consulting.",
  description:
    "Catalyst 7 is a Pretoria-based creative-technology studio. We build automation systems, produce commercial media, and configure business strategy for founders and growing SMEs.",
  openGraph: {
    title: "Catalyst 7 — Technology. Production. Consulting.",
    description:
      "Catalyst 7 is a Pretoria-based creative-technology studio. We build automation systems, produce commercial media, and configure business strategy for founders and growing SMEs.",
    url: "https://catalyst7.co.za",
  },
}

const featuredWork = [
  {
    slug: "circuits-of-culture",
    category: "PRODUCTION",
    year: "2025–2026",
    title: "Circuits of Culture",
    description:
      "A long-form culture podcast built and produced by C7, covering the conversations South African youth are actually having. 162 peak views, 33 subscribers.",
    tag: "Podcast · Media",
  },
  {
    slug: "phoenix-jewellers-maker-series",
    category: "PRODUCTION",
    year: "2026",
    title: "Phoenix Jewellers — The Maker Series",
    description:
      "A cinematic craft photography series that told the story the jewellery was only hinting at. 73 likes on launch, still converting seven months on.",
    tag: "Photography · Editorial",
  },
  {
    slug: "bolo-league-visual-identity",
    category: "PRODUCTION",
    year: "2026",
    title: "BOLO League — Visual Identity",
    description:
      "A complete visual identity built for a football brand that needed to feel like a cultural institution, not a Sunday league.",
    tag: "Brand · Identity",
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        <div className="relative z-10">
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

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#CC1414]">
            <p className="text-[#CC1414] text-sm font-medium mb-4">02</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Production &amp; Media
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Commercial film, social content, podcast production and creative
              direction. From brief to final cut.
            </p>
            <Link
              href="/production"
              className="text-[#CC1414] text-sm mt-6 block hover:underline"
            >
              Explore Production &rarr;
            </Link>
          </div>

          <div className="bg-[#1A1A1A] p-8 border-t-2 border-[#CC1414]">
            <p className="text-[#CC1414] text-sm font-medium mb-4">03</p>
            <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
              Business Consultancy
            </h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Strategy, systems design and market entry. We configure the
              structure behind your growth.
            </p>
            <Link
              href="/consulting"
              className="text-[#CC1414] text-sm mt-6 block hover:underline"
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
              3
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
              11
            </p>
            <p className="text-[#999999] text-xs uppercase tracking-widest mt-1">
              Portfolio Projects
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

      {/* Selected Work */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <p className="uppercase tracking-widest text-[#999999] text-xs">
            Selected Work
          </p>
          <Link
            href="/work"
            className="text-[#999999] text-xs hover:text-[#EDE5D0] transition-colors"
          >
            View All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredWork.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bg-[#1A1A1A] p-8 block border border-transparent hover:border-[#CC1414] transition-colors group"
            >
              <div className="flex justify-between mb-6">
                <span className="text-[#999999] text-xs uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-[#999999] text-xs">{project.year}</span>
              </div>
              <h3 className="text-[#EDE5D0] text-xl font-semibold mb-3 group-hover:text-[#CC1414] transition-colors font-[family-name:var(--font-space-grotesk)]">
                {project.title}
              </h3>
              <p className="text-[#999999] text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <span className="inline-block border border-[#333333] text-[#999999] text-xs px-3 py-1">
                {project.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#CC1414] py-20 px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Tell us what you need.<br />We&apos;ll configure the rest.
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Discovery call booked within 24 hours. Proposal in 48.
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
