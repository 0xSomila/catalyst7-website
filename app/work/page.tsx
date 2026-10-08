import Link from "next/link"

export default function Work() {
  const projects = [
    {
      slug: "catalyst7-hq",
      category: "TECHNOLOGY",
      year: "2026",
      title: "Catalyst 7 HQ",
      description:
        "A self-hosted operating system built to run C7 from the inside out. Freelancer hours, revenue, pipeline — complete data ownership at zero recurring cost.",
      tag: "Cloud · Infrastructure",
    },
    {
      slug: "nuru-house-ai-receptionist",
      category: "TECHNOLOGY",
      year: "2026",
      title: "Nuru House AI Receptionist",
      description:
        "A WhatsApp-native AI receptionist that qualifies, captures, and routes every salon enquiry without a human hand-off.",
      tag: "AI · Automation",
    },
    {
      slug: "c7-automation-os",
      category: "TECHNOLOGY",
      year: "2026",
      title: "C7 Automation OS",
      description:
        "A multi-tenant AI appointment platform designed to be sold to professional service businesses, not just used by one.",
      tag: "AI · SaaS",
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
      slug: "origin-pretoria",
      category: "PRODUCTION",
      year: "2026",
      title: "ORIGIN — Pretoria",
      description:
        "A personal brand editorial series using Pretoria as both backdrop and declaration. Two volumes published, now a sellable C7 format.",
      tag: "Photography · Editorial",
    },
    {
      slug: "maneuneu-physiotherapy",
      category: "CONSULTING + PRODUCTION",
      year: "2025-2026",
      title: "Maneuneu Physiotherapy — Brand Content System",
      description:
        "Built the content system that turned a Pretoria physiotherapy practice into a brand patients actively seek out.",
      tag: "Content · Strategy",
    },
    {
      slug: "krownbarber-the-krown",
      category: "PRODUCTION",
      year: "2025",
      title: "KrownBarber x Lefa — The Krown",
      description:
        "A brand film that gave a Pretoria barbershop a cultural identity to match its craft.",
      tag: "Brand Film",
    },
    {
      slug: "circuits-of-culture",
      category: "PRODUCTION",
      year: "2025",
      title: "Circuits of Culture",
      description:
        "A cinematic music video that gave an emerging artist's concept the visual weight it deserved. C7 co-produced and credited.",
      tag: "Music Video · Film",
    },
    {
      slug: "nuru-house-next5",
      category: "CONSULTING + PRODUCTION",
      year: "2025",
      title: "Nuru House x Next 5",
      description:
        "Social growth consulting and content production for two active client relationships running simultaneously through C7.",
      tag: "Strategy · Production",
    },
    {
      slug: "parrots-wonderpark",
      category: "PRODUCTION",
      year: "2025",
      title: "Parrots Wonderpark",
      description:
        "Event and venue coverage for one of Pretoria's leading entertainment destinations. Photography across social and digital channels.",
      tag: "Event · Photography",
    },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <p className="text-[#999999] text-xs uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-[#EDE5D0] transition-colors">
            HOME
          </Link>{" "}
          / WORK
        </p>
        <h1 className="text-[#EDE5D0] text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          Selected work.
        </h1>
        <p className="text-[#999999] text-xl max-w-xl">
          Projects across technology, production and consulting. Every
          engagement listed here produced a measurable outcome.
        </p>
      </section>

      {/* Project Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bg-[#1A1A1A] p-8 block hover:border-[#CC1414] border border-transparent transition-colors group"
            >
              <div className="flex justify-between mb-6">
                <span
                  className={`text-xs uppercase tracking-widest ${
                    index === 0 ? "text-[#CC1414]" : "text-[#999999]"
                  }`}
                >
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

      {/* CTA Strip */}
      <section className="bg-[#1A1A1A] py-16 px-6 border-t border-[#333333]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#EDE5D0] text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
            Working on something?
          </p>
          <Link
            href="/contact"
            className="bg-[#CC1414] text-white px-8 py-3 font-medium hover:bg-red-700 transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}
